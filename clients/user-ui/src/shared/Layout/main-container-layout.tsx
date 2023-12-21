import React from "react";

const MainContainerLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={'pl-3 pr-3 h-auto'}>{children}</main>
  );
};
export default MainContainerLayout;
