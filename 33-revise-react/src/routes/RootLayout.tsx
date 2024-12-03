import React from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainHeader onCreatePost={() => {}} />
      <Outlet />
    </>
  );
};

export default RootLayout;
