import React from "react";
import { IconButton, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as IconNotify } from "assets/icon/icon_notification.svg";

const MenuAuth = () => {
  return (
    <div className="flex flex-row items-center gap-9 ">
      <IconButton sx={{ width: 30, height: 30, color: "#fff" }}>
        <SvgIcon inheritViewBox={true} component={IconNotify} />
      </IconButton>
      <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>
        Sign up
      </Typography>
      <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>
        Sign in
      </Typography>
    </div>
  );
};

export default MenuAuth;
