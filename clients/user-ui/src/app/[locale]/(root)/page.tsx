"use client";
import React from "react";
import useUser from "@/shared/hooks/useUser";
import DefaultPage from "@/shared/pages/default.page";
import dynamic from "next/dynamic";

const DynamicDashboard = dynamic(() => import("@/shared/pages/dashboard.page"), {
  loading: () => <h2>Loading...</h2>,
  ssr: false
})

const Home = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (user) {
    return <DynamicDashboard />;
  }

  return <DefaultPage />;
};

export default Home;
