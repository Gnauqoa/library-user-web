import React from "react";
import {
  CircularProgress,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import { ReactComponent as IconNotify } from "assets/icon/icon_notification.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DefaultAvatar from "assets/img/default_avatar.png";
const MenuAuth = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  if (loginStatus.isChecking) return <CircularProgress />;
  if (loginStatus.isLogin) return <OnLogin />;
  return <OnGuest />;
};
const OnGuest = () => {
  return (
    <div className="flex flex-row items-center gap-9">
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
const OnLogin = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <IconButton sx={{ width: 30, height: 30, color: "#fff" }}>
        <SvgIcon inheritViewBox={true} component={IconNotify} />
      </IconButton>
      <IconButton sx={{ width: 60, height: 60, color: "#fff" }}>
        <img alt="" src={DefaultAvatar} />
      </IconButton>
    </div>
  );
};
export default MenuAuth;
