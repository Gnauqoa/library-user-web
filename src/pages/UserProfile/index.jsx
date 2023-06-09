import { Container, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as IconActiveTick } from "assets/icon/icon_check.svg";

import DefaultAvatar from "assets/img/default_avatar.svg";
import React from "react";
import CardInfo from "./CardInfo";
import UserInfo from "./UserInfo";
import Activity from "./Activity";
import BorrowList from "./BorrowList";

const UserProfile = () => {
  return (
    <Container sx={{ paddingY: "100px" }}>
      <div className="flex flex-col gap-6">
        <Typography sx={{ fontSize: 40, fontWeight: 600, color: "#000" }}>
          Reader information
        </Typography>
        <div className="flex flex-row gap-[70px]">
          <div className="flex flex-row items-center gap-[50px]">
            <Avatar />
            <CardInfo />
          </div>
          <UserInfo />
        </div>
        <div className="flex flex-row w-full gap-8">
          <BorrowList />
          <Activity />
        </div>
      </div>
    </Container>
  );
};
const Avatar = () => {
  return (
    <div className="flex flex-col relative w-[160px] h-[160px] rounded-full">
      <div className="top-5 right-1 absolute w-[32px] h-[32px] p-4 rounded-full bg-[#34C759] items-center justify-center flex flex-col">
        <SvgIcon
          component={IconActiveTick}
          inheritViewBox={true}
          sx={{
            width: 12,
            height: "auto",
            position: "absolute",
            color: "#fff",
          }}
        />
      </div>
      <img alt="" className="w-full h-full object-cover" src={DefaultAvatar} />
    </div>
  );
};
export default UserProfile;
