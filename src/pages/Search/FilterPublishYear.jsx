import { Button, Typography } from "@mui/material";
import MyCheckBox from "components/MyCheckBox";
import MyInput from "components/MyInput";
import MyInputDate from "components/MyInputDate";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchObject } from "services/getSearchObject";
import validator from "validator";

const FIlterPublishYear = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);
  const [from_year, setFromYear] = useState(null);
  const [to_year, setToYear] = useState(null);
  const handleApply = () => {
    if (from_year) {
      searchObject.from_year = from_year;
    } else delete searchObject.from_year;
    if (to_year) searchObject.to_year = to_year;
    else delete searchObject.to_year;
    searchObject.page = 1;
    setSearchParams(new URLSearchParams(searchObject));
  };
  const handleReset = () => {
    setFromYear(null);
    setToYear(null);
    delete searchObject.from_year;
    delete searchObject.to_year;
    searchObject.page = 1;
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
            fontFamily: "Poppins",
          }}
        >
          Publish year
        </Typography>
      </div>
      <div className="flex flex-row items-center gap-1">
        <MyInputDate
          views={["year"]}
          value={from_year}
          format="YYYY"
          sx={{ p: 0, px: "4px" }}
          onChange={(e) => {
            setFromYear(e);
          }}
        />

        <Typography
          sx={{ fontSize: 16, fontWeight: 400, fontFamily: "Poppins" }}
        >
          to
        </Typography>
        <MyInputDate
          format="YYYY"
          views={["year"]}
          value={to_year}
          sx={{ p: 0, px: "4px" }}
          onChange={(e) => {
            setToYear(e);
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

export default FIlterPublishYear;
