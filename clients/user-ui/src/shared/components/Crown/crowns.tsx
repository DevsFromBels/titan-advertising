import React from "react";
import { Icon } from '@iconify/react';
import crownIcon from '@iconify/icons-mdi/crown';
import { undefined } from "zod";

type UserRole = {
  role: Roles
}

type Roles = {
  user: string
  standart: string
  premium: string
  group: string
}

const Crowns = ({ role }: { role: string | undefined }) => {
  if(role === "user") {
    return
  }

  return (
    <Icon icon={crownIcon} color={'FFD700'}>Crows</Icon>
  );
};
export default Crowns;
