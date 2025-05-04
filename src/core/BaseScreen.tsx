import { CustomAppBar, CustomAppBarProps } from "@/components/CustomAppBar";
import React, { ReactNode } from "react";

interface BaseScreenProps {
  children: ReactNode;
  appBarProps?: CustomAppBarProps;
}

export const BaseScreen = ({ children, appBarProps }: BaseScreenProps) => {
  return (
    <>
      <CustomAppBar
        showHeader={appBarProps?.showHeader}
        title={appBarProps?.title}
        showDrawer={appBarProps?.showDrawer}
        showBack={appBarProps?.showBack}
      />
      {children}
    </>
  );
};
