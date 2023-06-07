import { Typography } from "@mui/material";
import MySelect, { SelectItem } from "components/MySelect";
import React from "react";

const Step2 = () => {
  return (
    <div className="flex flex-col gap-6">
      <Typography
        sx={{
          fontFamily: "Lato",
          fontSize: 32,
          fontWeight: 700,
          color: "#2C2C2C",
          textAlign: "center",
        }}
      >
        Choose type of reader card
      </Typography>
      <div className="flex flex-col gap-2">
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 14,
            fontWeight: 500,
            color: "#333333",
          }}
        >
          Type of reader card
        </Typography>
      </div>
      <MySelect optionList={["quang", "quang1"]} />
    </div>
  );
};

export default Step2;
