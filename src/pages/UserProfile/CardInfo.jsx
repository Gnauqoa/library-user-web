import { Box, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as IconDiamond } from "assets/icon/icon_diamond.svg";
import { ReactComponent as IconCalendarAdd } from "assets/icon/icon_calendar_add.svg";
import { ReactComponent as IconBook } from "assets/icon/icon_book.svg";
import { ReactComponent as IconBook2 } from "assets/icon/icon_book_2.svg";
import { ReactComponent as IconTimer } from "assets/icon/icon_timer.svg";
import React from "react";
import { useSelector } from "react-redux";
import InfoItem from "./InfoItem";
import dayjs from "dayjs";

const CardInfo = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-[40px]">
        <Typography sx={{ fontSize: 40, fontWeight: 600, color: "#000" }}>
          {currentUser.first_name + " " + currentUser.last_name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "4px",
            paddingY: "8px",
            paddingX: "12px",
            background:
              "linear-gradient(132.89deg, #EDA004 -19.13%, #FAF0DD 100.12%)",
            borderRadius: "90px",
          }}
        >
          <SvgIcon
            component={IconDiamond}
            inheritViewBox={true}
            sx={{ width: 18, height: "auto" }}
          />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: "#E69A00",
              fontFamily: "HAIRLINE/ SMALL",
            }}
          >
            Loyal
          </Typography>
        </Box>
      </div>
      <InfoItem
        icon={IconCalendarAdd}
        info={`Created card date: ${dayjs(currentUser.created_at).format(
          "DD/MM/YYYY"
        )}`}
      />
      <div className="flex flex-row items-center gap-[80px]">
        <InfoItem icon={IconBook} info={`Borrowing book: 3`} />
        <InfoItem icon={IconBook2} info={`Borrowed book: 3`} />
      </div>
      <InfoItem
        icon={IconTimer}
        info={`Account duration: ${dayjs(currentUser.expire_at).format(
          "DD/MM/YYYY"
        )}`}
      />
      <div className="flex flex-row items-center"></div>
    </div>
  );
};

export default CardInfo;
