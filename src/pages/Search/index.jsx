import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as IconInfo } from "assets/icon/icon_info.svg";
const SearchBook = () => {
  const { book_name } = useParams();
  return (
    <div className="flex flex-row gap-[80px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row items-center gap-3">
          <SvgIcon
            component={IconInfo}
            sx={{ width: 28, height: 28, color: "#266E96" }}
          />
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 400,
              color: "#000",
              fontFamily: "Poppins",
            }}
          >
            Search result for
            <span className="text-[#266E96]"> {book_name}</span>
          </Typography>
        </div>
        <div className="grid grid-cols-5 gap-x-[50px] gap-y-[50px]">
            
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
