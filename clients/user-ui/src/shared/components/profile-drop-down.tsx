'use client'
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from "@/shared/components/ui/dropdown-menu";
import Avvvatars from 'avvvatars-react'
import useUser from "@/shared/hooks/useUser";
import {SignOut} from "@/features/auth/sign-out";
import { useRouter } from "next/navigation";


const ProfileDropDown = () => {
  const { user } = useUser();
  const router = useRouter()
  const handleLogOut = async () => {
    await  SignOut();
  }

  const handleLinkTo = (link: string) => {
    router.push(link);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
            <Avvvatars border={true} borderColor={'var(--avatar-border-gradient)'} size={35} style={'shape'} value={`${user?.name}`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleLinkTo(`/profile/${user?.id}`)}>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLinkTo('/about')}>About TITAN</DropdownMenuItem>
        <DropdownMenuItem onClick={ handleLogOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileDropDown;
