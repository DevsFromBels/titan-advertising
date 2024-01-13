import React from "react";

const MainContainerLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={'px-4 h-auto'}>{children}</main>
  );
};
export default MainContainerLayout;
