"use client";

import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/shared/components/ModeToggle";
import React from "react";
import dynamic from 'next/dynamic'
import { useTranslations } from "next-intl";
import useUser from "@/shared/hooks/useUser";

const DynamicProfileSheet = dynamic(() => import("@/widgets/ProfileSheet"), {
  ssr: false
});

const Header = () => {
  const { user } = useUser();
  const t = useTranslations('Header')

  return (
    <header
      className={
        "w-full h-[48px] sticky top-0 flex justify-between align-middle px-4 items-center relative border-b border-solid backdrop-blur z-[999]"
      }
    >
      <div>
        <Link href={"/"}>{t('Project_Name')}</Link>
      </div>
      <div className={"flex gap-2"}>
        <div className={"flex gap-2"}>
          {!user && (
            <>
                <Link href={"/auth/signUp"}>
                  <Button variant={"ghost"}>{t('signUp')}</Button>
                </Link>
            
                <Link href={"/auth/signIn"}>
                  <Button variant={"ghost"}>{t('signIn')}</Button>
                </Link>
            </>
          )}
        </div>
        <div className={" flex gap-3"}>
          {user && <DynamicProfileSheet />}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
export default Header;
