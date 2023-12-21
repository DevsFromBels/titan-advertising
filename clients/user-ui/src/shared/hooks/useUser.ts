'use client'
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/shared/graphql/actions/get-user.action";

const UseUser = () => {
  const { loading,  data } = useQuery(GET_USER);
  console.log(data)
  return {
    loading,
    user: data
  }
};
export default UseUser;
