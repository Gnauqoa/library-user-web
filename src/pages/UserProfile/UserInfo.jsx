import React from "react";
import { ReactComponent as IconCalendar } from "assets/icon/icon_calendar_2.svg";
import { ReactComponent as IconEmail } from "assets/icon/icon_sms.svg";
import { ReactComponent as IconLocation } from "assets/icon/icon_location.svg";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import InfoItem from "./InfoItem";
import dayjs from "dayjs";
const UserInfo = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <div className="flex flex-col gap-8">
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 600,
        }}
      >
        About {currentUser.last_name}
      </Typography>
      <div className="flex flex-col gap-3">
        <InfoItem icon={IconEmail} info={currentUser.email} />
        <InfoItem icon={IconLocation} info={currentUser.address} />
        <InfoItem
          icon={IconCalendar}
          info={dayjs(currentUser.birth).format("DD/MM/YYYY")}
        />
      </div>
    </div>
  );
};
export default UserInfo;
