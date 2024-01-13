"use client";
import React, { useState } from "react";
import { ModeToggle } from "@/shared/components/ModeToggle";
import { Button } from "@/shared/components/ui/button";
import AddToolTip from "@/shared/components/AddToolTip";
import Link from "next/link";
import useUser from "@/shared/hooks/useUser";
import ProfileSheet from "@/widgets/ProfileSheet";
import { Input } from "@/shared/components/ui/input";
import { useTranslations } from "next-intl";

const Header = () => {
  const { user } = useUser();
  const t = useTranslations('Header')

  return (
    <header
      className={
        "w-full h-[48px] flex justify-between align-middle px-4 items-center relative border-b border-solid"
      }
    >
      <div>
        <Link href={"/"}>TITAN Finance</Link>
      </div>
      <div className={"flex gap-2"}>
        <div className={"flex gap-2"}>
          {!user && (
            <>
              <AddToolTip
                toolTipText={"Sign Up to be a member"}
                className={"mt-1"}
              >
                <Link href={"/auth/signUp"}>
                  <Button variant={"ghost"}>{t('signUp')}</Button>
                </Link>
              </AddToolTip>
              <AddToolTip toolTipText={"Sign In to start"} className={"mt-1"}>
                <Link href={"/auth/signIn"}>
                  <Button variant={"ghost"}>{t('signIn')}</Button>
                </Link>
              </AddToolTip>
            </>
          )}
        </div>
        <div className={" flex gap-3"}>
          {user && <ProfileSheet />}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
export default Header;
