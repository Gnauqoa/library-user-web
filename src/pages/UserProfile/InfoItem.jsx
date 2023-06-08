import React from "react";
import { SvgIcon, Typography } from "@mui/material";

const InfoItem = ({ icon, info }) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <SvgIcon
        component={icon}
        inheritViewBox={true}
        sx={{ width: 24, height: 24, color: "#4A4553" }}
      />
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 300,
          color: "#4A4553",
        }}
      >
        {info}
      </Typography>
    </div>
  );
};

export default InfoItem;
