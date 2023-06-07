import React from "react";
import { IconButton, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as IconNotify } from "assets/icon/icon_notification.svg";
import { Link } from "react-router-dom";

const MenuAuth = () => {
  return (
    <div className="flex flex-row items-center gap-9 ">
      <IconButton sx={{ width: 30, height: 30, color: "#fff" }}>
        <SvgIcon inheritViewBox={true} component={IconNotify} />
      </IconButton>
      <Link to="auth/register">
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>
          Sign up
        </Typography>
      </Link>
      <Link to="auth/login">
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>
          Sign in
        </Typography>
      </Link>
    </div>
  );
};

export default MenuAuth;
