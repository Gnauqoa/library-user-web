import React from "react";
import { ReactComponent as IconFilter } from "assets/icon/icon_filter.svg";
import { SvgIcon, Typography } from "@mui/material";
const Filter = () => {
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <div className="flex flex-row items-center gap-3 ">
        <SvgIcon
          component={IconFilter}
          inheritViewBox={true}
          sx={{
            width: 26,
            height: 26,
            color: "#2E4958",
            fontFamily: "Poppins",
          }}
        />
        <Typography sx={{ fontSize: 20, fontWeight: 500, color: "#2E4958" }}>
          Filter search
        </Typography>
      </div>
      <div className="flex flex-col gap-[15px]"></div>
    </div>
  );
};

export default Filter;
