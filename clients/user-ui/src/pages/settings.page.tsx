'use client'
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { PersonIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/shared/components/ui/textarea"
import useProfile from "@/shared/hooks/useProfile";
import Avvvatars from "avvvatars-react";

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
