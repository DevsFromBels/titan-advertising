'use client'
import React, { useState } from "react";
import {ModeToggle} from "@/shared/components/ModeToggle";
import { Button } from "@/shared/components/ui/button";
import AddToolTip from "@/shared/components/AddToolTip";
import Link from "next/link";
import useUser from "@/shared/hooks/useUser";
import ProfileDropDown from "@/shared/components/profile-drop-down";

const Header = () => {
  const { user } = useUser();

    return (
        <header className={"w-full h-[48px] flex justify-between align-middle p-3 items-center"}>
                <div>
                    <Link href={'/'}>TITAN Finance</Link>
                </div>
                 <div className={'flex gap-2'}>
                   <div className={'flex gap-2'}>
                     {!user && (
                       <>
                         <AddToolTip toolTipText={'Sign Up to be a member'} className={'mt-1'}>
                               <Link href={'/auth/signUp'}>
                                 <Button variant={'ghost'}>
                                    Sign up
                                 </Button>
                               </Link>
                         </AddToolTip>
                          <AddToolTip toolTipText={'Sign In to start'} className={'mt-1'}>
                             <Link href={'/auth/signIn'}>
                                 <Button variant={'ghost'}>
                                    Sign In
                                 </Button>
                               </Link>
                          </AddToolTip>
                       </>
                     )}
                     {user && (
                       <ProfileDropDown/>
                     )}
                   </div>
                   <ModeToggle/>
                 </div>
        </header>
    )
}
export default Header;
