"use client";

import { SignOut } from "@/features/auth/sign-out";
import { Link } from "@/features/navigation";
import AddToolTip from "@/shared/components/AddToolTip";
import Crowns from "@/shared/components/Crown/crowns";
import ChangeLanguage from "@/shared/components/change-language";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/shared/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import useUser from "@/shared/hooks/useUser";
import translateIcon from "@iconify/icons-mdi/translate";
import { Icon } from "@iconify/react";
import {
  ExitIcon,
  MixerHorizontalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Avvvatars from "avvvatars-react";
import { useTranslations } from "next-intl";
import React from "react";

const ProfileSheet = () => {
  const { user } = useUser();
  const t = useTranslations("ProfileSheet");

  return (
    <Sheet>
      <SheetTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <Avvvatars
              border={true}
              borderColor={"var(--avatar-border-gradient)"}
              size={35}
              style={"shape"}
              value={`${user?.name}`}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("title")}</p>
          </TooltipContent>
        </Tooltip>
      </SheetTrigger>
      <SheetContent className={"rounded-l-3xl w-[300px] sm:w-[450px] z-[6666]"}>
        <SheetHeader>
          <SheetTitle className={"text-md"}>{t("title")}</SheetTitle>
        </SheetHeader>
        <div className={"my-4 flex items-center gap-3 font-medium"}>
          <Avvvatars
            border={true}
            borderColor={"var(--avatar-border-gradient)"}
            size={35}
            style={"shape"}
            value={`${user?.name}`}
          />
          <h2 className={"flex gap-1 items-center"}>
            {user?.name}{" "}
            <AddToolTip toolTipText={"Premium User"}>
              <Crowns role={user?.role.toLowerCase()} />
            </AddToolTip>
          </h2>
        </div>
        <Separator className={"my-3"} />
        <div className={"flex gap-2 items-center"}>
          <SheetClose asChild>
            <Link href={`/${user?.name.toLowerCase()}`} className={"w-full"}>
              <Button
                variant={"ghost"}
                className={"text-left w-full justify-start gap-2"}
              >
                <PersonIcon />
                {t("profile")}
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={`/${user?.name.toLowerCase()}/settings`}
              className={"w-full"}
            >
              <Button
                variant={"ghost"}
                className={"text-left w-full justify-start gap-2"}
              >
                <MixerHorizontalIcon />
                {t("settings")}
              </Button>
            </Link>
          </SheetClose>
        </div>
        <Separator className={"my-3"} />
        <div>
          <SheetClose asChild>
            <ChangeLanguage>
              <Button variant={"ghost"} className={"flex items-center gap-1"}>
                <Icon icon={translateIcon} />
                {t("lang")}
              </Button>
            </ChangeLanguage>
          </SheetClose>
        </div>
        <div>
          <SheetClose asChild>
            <Button
              variant={"ghost"}
              className={"text-left w-full justify-start gap-2"}
              onClick={SignOut}
            >
              <ExitIcon />
              {t("signOut")}
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default ProfileSheet;
