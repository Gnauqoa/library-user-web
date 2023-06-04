import React from "react";
import AppBar from "components/AppBar";
import { Outlet } from "react-router-dom";

const NormalLayout = () => {
  return (
    <div className="flex flex-col">
      <AppBar />
      <Outlet />
    </div>
  );
};

export default NormalLayout;
