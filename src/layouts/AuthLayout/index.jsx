import React from "react";
import AuthBackground from "assets/img/auth_background.png";
import { Outlet } from "react-router";
import { SvgIcon, Typography } from "@mui/material";
import { ReactComponent as Logo } from "assets/img/logo.svg";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full relative">
      <SvgIcon
        inheritViewBox={true}
        sx={{
          position: "absolute",
          top: 40,
          left: 70,
          height: 80,
          width: "auto",
          color: "#fff",
          marginRight: "auto",
          zIndex: 20,
        }}
        component={Logo}
      />
      <img
        alt=""
        className="w-full h-full absolute z-10"
        src={AuthBackground}
      />
      <div className="w-full h-full  z-20">
        <Outlet />
      </div>
      <div className="flex flex-row absolute bottom-10 left-10 z-20 gap-8">
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "#A6BBCD",
            fontFamily: "Lato",
          }}
        >
          About
        </Typography>{" "}
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "#A6BBCD",
            fontFamily: "Lato",
          }}
        >
          Contact
        </Typography>
      </div>
    </div>
  );
};

export default AuthLayout;
