import React from "react";
import AuthBackground from "assets/img/auth_background.png";
const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full relative">
      <img alt="" className="w-full h-full" src={AuthBackground} />
    </div>
  );
};

export default AuthLayout;
