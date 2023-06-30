import { Button, Typography } from "@mui/material";
import MyCheckBox from "components/MyCheckBox";
import MyInput from "components/MyInput";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchObject } from "services/getSearchObject";
import validator from "validator";

const FilterNumberOfPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);
  const [min_number, setMin] = useState("");
  const [max_number, setMax] = useState("");
  const handleApply = () => {
    if (validator.isNumeric(min_number))
      searchObject.min_number_of_page = min_number;
    if (validator.isNumeric(max_number))
      searchObject.max_number_of_page = max_number;
    searchObject.page = 1;
    setSearchParams(new URLSearchParams(searchObject));
  };
  const handleReset = () => {
    setMin("");
    setMax("");
    searchObject.page = 1;
    delete searchObject.min_number_of_page;
    delete searchObject.max_number_of_page;
    setSearchParams(new URLSearchParams(searchObject));
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-2 pb-[10px] border-b-[2px] border-[#2E4958]">
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "#2E4958",
          }}
        >
          Number of page
        </Typography>
      </div>
      <div className="flex flex-row items-center gap-3">
        <MyInput
          value={min_number}
          sx={{ p: 0, px: "4px" }}
          onChange={(e) => {
            if (e.target.value === "" || validator.isNumeric(e.target.value))
              setMin(e.target.value);
          }}
        />
        <Typography sx={{ fontSize: 16, fontWeight: 400 }}>to</Typography>
        <MyInput
          value={max_number}
          sx={{ p: 0, px: "4px" }}
          onChange={(e) => {
            if (e.target.value === "" || validator.isNumeric(e.target.value))
              setMax(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row items-center">
        <Button onClick={handleApply} sx={{ width: "100%" }}>
          Apply
        </Button>
        <Button onClick={handleReset} sx={{ width: "100%" }}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FilterNumberOfPage;
