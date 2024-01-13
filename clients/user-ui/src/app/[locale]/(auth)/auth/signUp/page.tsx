'use client'
import toast from "react-hot-toast";
import Modal from "@/shared/components/Modal";
import OtpInput from 'react-otp-input';
import React, { useState } from "react";
import { FetchResult, useMutation } from "@apollo/client";
import { REGISTER_USER } from "@/shared/graphql/actions/register.action";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ACTIVATE_USER } from "@/shared/graphql/actions/activation.action";
import { OTPCompleted } from "@/features/auth/otp";
import type  { Toast } from "react-hot-toast/headless";
import { SignUpSchema as ZodSignUpSchema } from "@/features/auth/register";
 import { SignUpSchema } from "@/shared/schemas/signUpSchema";
import { LOGIN_USER } from "@/shared/graphql/actions/login.action";
import useUser from "@/shared/hooks/useUser";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

const Page = () => {
  const [ registerMutation, { loading: registerLoading} ] = useMutation(REGISTER_USER);
  const [ activateMutation, { loading: activateLoading, error} ] = useMutation(ACTIVATE_USER);
  const [ openDialog, setOpenDialog ] = useState(false);
  const [ otp, setOtp ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const { user, loading: asUserLoading} = useUser();
  const [ Login, { loading } ] = useMutation(LOGIN_USER);
  const router = useRouter();
  const t = useTranslations('SignUp');
  const tOTP = useTranslations('OTP');

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset
  } = useForm<ZodSignUpSchema>({
    resolver: zodResolver(SignUpSchema)
  });

  if(asUserLoading) {
    return <h2>Loading...</h2>
  }

  if(user?.name) {
    router.push('/')
  }

  const onSubmit = async (data: ZodSignUpSchema) => {
      try {
        const response = await  registerMutation({
          variables: data
        })

        localStorage.setItem("activation_token", response.data.register.activation_token)

        reset();
        setOpenDialog(true)
      } catch (err: any) {
        toast((t: Toast) => (
          <div className={'flex items-center gap-10 h-[22px] w-[320px]'}>
              <span className={'text-sm'}>{err.message}</span>
              <Button onClick={() => toast.dismiss(t.id)} variant={'outline'}>
                <Cross1Icon/>
              </Button>
          </div>
        ), {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff'
          }
        });
      }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      (OTPCompleted(otp) || activateLoading) && verifyEmailWithOTP();
    }
  }

  const verifyEmailWithOTP =  async () => {
    try {
      const activation_token = localStorage.getItem("activation_token");

      const response = await activateMutation({
        variables: {
          activationToken: activation_token,
          activationCode: otp
        }
      })

      if(response.data.activateUser.user) {
        setOpenDialog(false);
        localStorage.removeItem("activation_token")
      }

      const loginData = {
        email: email,
        password: password,
      };
      const res: FetchResult<any> = await Login({
        variables: loginData,
      });

      Cookies.set("refresh_token", res.data.login.refreshToken);
      Cookies.set("access_token", res.data.login.accessToken);
      reset();
      window.location.reload();

    } catch (err: any) {
      toast((t: Toast) => (
        <div className={'flex items-center gap-10 h-[22px] w-[320px]'}>
          <span className={'text-sm'}>{err.message}</span>
          <Button onClick={() => toast.dismiss(t.id)} variant={'outline'}>
            <Cross1Icon/>
          </Button>
        </div>
      ), {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff'
        }
      });
    }
  }

  return (
    <div className={'text-center font-medium mt-10'}>
      <h2>{t('textFrom')}</h2>
      <form className={'w-[400px] m-auto text-center mt-[2%] grid gap-3'} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            {...register("name")}
            autoComplete={'off'}
            placeholder={t('username')}
            type={"text"}
          />
          {errors.name&& (
            <span className={'m-2 text-sm'}>{errors.name.message}</span>
          )}
        </div>
        <div>
          <Input
            {...register("email")}
            autoComplete={'off'}
            placeholder={t('email')}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email&& (
            <span className={'m-2 text-sm'}>{errors.email.message}</span>
          )}
        </div>
        <div>
            <Input
              {...register("password")}
              autoComplete={'off'}
              placeholder={t('password')}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          {errors.password && (
            <span className={' m-2 text-sm'}>{errors.password.message}</span>
          )}
        </div>
        <Button type={'submit'} disabled={registerLoading}>{t('btnText')}</Button>
      </form>
      <Modal
          onKeyDown={handleKeyDown}
          openModal={openDialog}
          setOpenModal={setOpenDialog}
          title={tOTP('title')}
          description={`${tOTP('desc')} ${email}`}
          className={'select-none'}
      >
        <div className={'m-3'}>
          <OtpInput
            inputStyle={{
              width: '55px',
              height: '55px',
              userSelect: 'none'
            }}
            value={otp}
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: '10px',
              userSelect: 'none',
              gap: "8px",
              color: "#aaa"
            }}
            onChange={setOtp}
            numInputs={6}
            inputType={'number'}
            renderInput={(props) => <Input unselectable='on' {...props}/>}
            shouldAutoFocus
          />
          </div>
        <Button
          onClick={verifyEmailWithOTP}
          disabled={OTPCompleted(otp) || activateLoading}
          className={'flex m-auto mt-6'}
        >{tOTP('btn')}</Button>
      </Modal>
    </div>
  );
};
export default Page;
