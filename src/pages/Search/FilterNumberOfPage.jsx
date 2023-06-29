import { Typography } from "@mui/material";
import MyCheckBox from "components/MyCheckBox";
import MyInput from "components/MyInput";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchObject } from "services/getSearchObject";
import validator from "validator";
const FilterNumberOfPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);
  const [min_number, setMin] = useState("0");
  const [max_number, setMax] = useState("0");
  useEffect(() => {
    setMin(searchObject.min_number_of_page);
    setMax(searchObject.max_number_of_page);
  }, [searchParams]);

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
          Number of page
        </Typography>
        <div className="ml-auto"></div>
        <MyCheckBox
          free={false}
          value={
            min_number === searchObject.min_number_of_page &&
            max_number === searchObject.max_number_of_page
          }
          onChange={() => {
            if (
              min_number === searchObject.min_number_of_page &&
              max_number === searchObject.max_number_of_page
            )
              return;
            searchObject.min_number_of_page = min_number;
            searchObject.max_number_of_page = max_number;
            setSearchParams(new URLSearchParams(searchObject));
          }}
        />
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
        <Typography
          sx={{ fontSize: 16, fontWeight: 400, fontFamily: "Poppins" }}
        >
          to
        </Typography>
        <MyInput
          value={max_number}
          sx={{ p: 0, px: "4px" }}
          onChange={(e) => {
            if (e.target.value === "" || validator.isNumeric(e.target.value))
              setMax(e.target.value);
          }}
        />
      </div>
      <Typography
        onClick={() => {
          setMin("0");
          setMax("0");
          searchObject.min_number_of_page = 0;
          searchObject.max_number_of_page = 0;
          setSearchParams(new URLSearchParams(searchObject));
        }}
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "#2E4958",
          fontFamily: "Poppins",
          cursor: "pointer",
        }}
      >
        Reset
      </Typography>
    </div>
  );
};

export default FilterNumberOfPage;
