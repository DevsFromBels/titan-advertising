import React from "react";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { SideBarButton } from "@/shared/components/ui/side-bar-button";

const Sidebar = () => {
  return (
    <aside className={'absolute left-0 bottom-0 border-r border-solid h-[calc(100vh_-_3rem)] transition-all md:w-[250px] w-full'}>
      <div>
        <SideBarButton>Test World</SideBarButton>
      </div>
    </aside>
  );
};
export default Sidebar;
