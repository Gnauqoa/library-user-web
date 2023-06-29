import { Typography } from "@mui/material";
import MyCheckBox from "components/MyCheckBox";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchObject } from "services/getSearchObject";

const FilterAvailable = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);

  return (
    <div className="flex flex-row gap-2 pb-[10px] border-b-[2px] border-[#2E4958]">
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 700,
          color: "#2E4958",
          fontFamily: "Poppins",
        }}
      >
        Available to borrow
      </Typography>
      <div className="ml-auto"></div>
      <MyCheckBox
        onChange={() => {
          searchObject.available =
            searchObject.available === "true" ? "false" : "true";
          setSearchParams(new URLSearchParams(searchObject));
        }}
        value={searchObject.available === "true" ? 1 : 0}
      />
    </div>
  );
};

export default FilterAvailable;
