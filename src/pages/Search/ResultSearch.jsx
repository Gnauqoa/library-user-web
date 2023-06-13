import { SvgIcon, Typography } from "@mui/material";
import { ReactComponent as IconInfo } from "assets/icon/icon_info.svg";
import React from "react";
import { useSearchParams } from "react-router-dom";

const ResultSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center gap-3">
        <SvgIcon
          component={IconInfo}
          sx={{ width: 28, height: 28, color: "#266E96" }}
        />
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 400,
            color: "#000",
            fontFamily: "Poppins",
          }}
        >
          Search result for
          <span className="text-[#266E96]"> {}</span>
        </Typography>
      </div>
      <div className="grid grid-cols-5 gap-x-[50px] gap-y-[50px]"></div>
    </div>
  );
};

export default ResultSearch;
