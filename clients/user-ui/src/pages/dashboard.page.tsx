import React from "react";
import Sidebar from "@/widgets/Sidebar";
import Header from "@/widgets/header";
import Welcome from "@/shared/components/welcome";

const DashboardPage = () => {
  return (
    <div className={''}>
      <Welcome/>
      <Sidebar/>
      <div>
      </div>
    </div>
  );
};
export default DashboardPage;
