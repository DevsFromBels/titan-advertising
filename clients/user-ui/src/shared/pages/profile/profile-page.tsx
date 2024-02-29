"use client";

import Crowns from "@/shared/components/Crown/crowns";
import useProfile from "@/shared/hooks/useProfile";
import useUser from "@/shared/hooks/useUser";
import Avvvatars from "avvvatars-react";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import dynamic from 'next/dynamic'
import React from "react";

const DynamicProfileNotPublic = dynamic(() => import("@/shared/pages/profile/profile-not-public"), {
  ssr: false
});

const ProfilePage = ({ nickname }: { nickname: string }) => {
  const {
    profile,
    loading: ProfileLoading,
    error,
  } = useProfile({ name: nickname });
  const { user, loading: UserLoading } = useUser();
  const t = useTranslations("Index");

  if (ProfileLoading && UserLoading) {
    return "Loading...";
  }

  if (!profile?.isPublic && !(user?.name === profile?.user.name)) {
    return <DynamicProfileNotPublic />;
  }

  if (error) {
    return notFound();
  }

  return (
    <main className={"flex "}>
      <section aria-label={"info"} className={"w-[450px] "}>
        <div className={"flex mt-5"}>
          <div className={"border border-solid rounded-full border-avatar"}>
            <Avvvatars
              shadow
              border
              borderColor={"var(--avatar-border-gradient)"}
              size={220}
              style={"shape"}
              value={`${profile?.user.name}`}
            />
          </div>
        </div>
        <div>
          <h1
            className={
              " flex text-xl font-medium py-4 gap-1 items-center text-center"
            }
          >
            {profile?.user.name}{" "}
            <Crowns role={profile?.user.role.toLowerCase()} />
          </h1>
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
      <section aria-label={"shared"} className={"w-full"}></section>
    </main>
  );
};
export default ProfilePage;
