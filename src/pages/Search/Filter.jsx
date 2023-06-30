import React from "react";
import { ReactComponent as IconFilter } from "assets/icon/icon_filter.svg";
import { SvgIcon, Typography } from "@mui/material";

import FilterCategory from "./FilterCategory";
import FilterAvailable from "./FilterAvailable";
import FilterNumberOfPage from "./FilterNumberOfPage";
import FIlterPublishYear from "./FilterPublishYear";
import FilterLanguages from "./FilterLanguage";

const Filter = () => {
  return (
    <div className="flex flex-col gap-[30px] min-w-[20%]">
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
      <div className="flex flex-col gap-[15px] w-full">
        <FilterCategory />
        <FilterAvailable />
        <FilterNumberOfPage />
        <FIlterPublishYear />
        <FilterLanguages />
      </div>
    </div>
  );
};

export default Filter;
