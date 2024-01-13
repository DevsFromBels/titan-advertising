'use client'
import React from "react";
import Avvvatars from "avvvatars-react";
import useProfile from "@/shared/hooks/useProfile";
import { notFound } from "next/navigation";
import { Icon } from '@iconify/react';
import crownIcon from '@iconify/icons-mdi/crown';
import {useTranslations} from 'next-intl';


const ProfilePage = ({ nickname }: { nickname: string }) => {
  const { profile, loading: ProfileLoading, error } = useProfile({ name: nickname });
  const t = useTranslations('Index');

  if (ProfileLoading) {
    return  "Loading..."
  }

  if(!profile?.isPublic) {
    return notFound();
  }

  if(error) {
    return notFound()
  }

  return (
    <main className={'flex '}>
      <section aria-label={'info'} className={'w-[450px] '}>
        <div className={'flex mt-5'} >
          <div className={'border border-solid rounded-full border-avatar'}>
            <Avvvatars shadow border borderColor={'var(--avatar-border-gradient)'} size={220} style={'shape'} value={`${profile?.user.name}`} />
          </div>
        </div>
          <div>
            <h1 className={' flex text-xl font-medium py-4 gap-1 items-center text-center'}>{profile?.user.name} {profile.user.role === "User" && <Icon icon={crownIcon}  color={'FFD700'}/>}</h1>
            <div>
              {profile?.info && (
                <>
                  <h3>Profile Info:</h3>
                  <p>{profile.info}</p>
                </>
              )}
            </div>
          </div>
      </section>
      <section aria-label={'shared'} className={'w-full'}>

      </section>
    </main>
  );
};
export default ProfilePage;
