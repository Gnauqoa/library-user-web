import { IconButton, SvgIcon } from "@mui/material";
import React from "react";
import { ReactComponent as IconSearch } from "assets/icon/icon_search.svg";

const SearchBox = ({}) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row w-[600px] items-center gap-4 pl-4 pr-[5px] py-[5px] bg-[#fff] rounded-[25px] overflow-hidden">
        <input
          placeholder="Harry potter"
          className="outline-none text-[16px] w-full"
        />
        <IconButton
          sx={{
            background: "#266E96",
            color: "#fff",
            width: 40,
            height: 40,
            ":hover": { background: "#242D3F" },
          }}
        >
          <SvgIcon inheritViewBox={true} component={IconSearch}></SvgIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBox;
