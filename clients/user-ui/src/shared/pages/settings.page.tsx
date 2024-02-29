'use client'

import React from "react";
import useProfile from "@/shared/hooks/useProfile";

const SettingsPage = ({ nickname }: { nickname: string }) => {
  const { profile, loading } = useProfile({name: nickname})

  if(loading) {
    return  "Loading..."
  }

  return (
      <div className={''}>

      </div>
  );
};
export default SettingsPage;
