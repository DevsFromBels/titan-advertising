'use client'
import React from "react";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
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
import { signOut } from "@/features/auth/signout";

const ProfileDropDown = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
            <Avvvatars border={true} borderColor={'var(--avatar-border-gradient)'} size={35} style={'shape'} value={`${user?.name}`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileDropDown;
