import React from "react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { useTranslations } from "next-intl";
import { LockClosedIcon } from "@radix-ui/react-icons";

const ProfileNotPublic = () => {
  const t = useTranslations('ProfileClosed');

  return (
    <div className="flex h-[calc(100vh_-_3rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold flex justify-center"><LockClosedIcon width={100} height={100}/></h1>

        <p className="mt-2 text-2xl">{t('message')}.</p>

        <Link href="/">
          <Button className="mt-6">{t('buttonText')}</Button>
        </Link>
      </div>
    </div>
  );
};
export default ProfileNotPublic;
