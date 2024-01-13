'use client'
import React from "react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import Cookies from 'js-cookie';
import toast from "react-hot-toast";
import { LoginSchema } from "@/features/auth/login";
import { FetchResult, useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/shared/graphql/actions/login.action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInformSchema } from "@/shared/schemas/signInSchema";
import { Toast } from "react-hot-toast/headless";
import { Cross1Icon } from "@radix-ui/react-icons";
import useUser from "@/shared/hooks/useUser";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Page = () => {
  const [ Login, { loading } ] = useMutation(LOGIN_USER);
  const { user, loading: asUserLoading} = useUser();
  const router = useRouter()
  const t= useTranslations('SignIn')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(SignInformSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      const response: FetchResult<any> = await Login({
        variables: loginData,
      });

      toast.success("Login Successful!");
      Cookies.set("refresh_token", response.data.login.refreshToken);
      Cookies.set("access_token", response.data.login.accessToken);
      reset();
      window.location.reload();
    } catch (err:  any) {
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
  };

  if(asUserLoading) {
    return <h2>Loading...</h2>
  }

  if(user?.name) {
    router.push('/')
  }

  return (
    <div className={'text-center font-medium mt-10'}>
      <h2>{t('textFrom')}</h2>
      <form className={'w-[400px] m-auto text-center mt-[2%] grid gap-3'} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            {...register("email")}
            autoComplete={'off'}
            placeholder={t('email')}
            type={"email"}
            // onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="text-red-500 block mt-1">
            {`${errors.email.message}`}
          </span>
          )}
        </div>
        <div>
          <Input
            {...register("password")}
            autoComplete={'off'}
            placeholder={t('password')}
            type={"password"}
          />
          {errors.password && (
            <span className="text-red-500">{`${errors.password.message}`}</span>
          )}
        </div>
        <Button type={'submit'} disabled={loading}>{t('btnText')}</Button>
      </form>
    </div>
  );
};
export default Page;
