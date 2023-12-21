'use client'
import React, { useState } from "react";
import {ModeToggle} from "@/shared/components/ModeToggle";
import { Button } from "@/shared/components/ui/button";
import AddToolTip from "@/shared/components/AddToolTip";
import Link from "next/link";

const Header = () => {
  const [auth, setAuth] = useState<boolean>(false);

    return (
        <header className={"w-full h-[48px] flex justify-between align-middle p-3 items-center"}>
                <div>
                    <Link href={'/'}>TITAN Finance</Link>
                </div>
                 <div className={'flex gap-2'}>
                   <div className={'flex gap-2'}>
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
                   </div>
                   <ModeToggle/>
                 </div>
        </header>
    )
}
export default Header;
