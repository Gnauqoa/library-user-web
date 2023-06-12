import { Typography } from "@mui/material";
import React from "react";

const SearchBookCard = ({ name, authors }) => {
  return (
    <div className="flex flex-col py-[15px] items-center gap-[15px]">
      <div className="w-[130px] h-[250px] rounded-[4px] flex flex-col items-center">
        <img alt="" className="h-full w-auto object-cover" />
      </div>
      <div className="flex flex-col gap-[15px]">
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 400,
            color: "#000",
            fontFamily: "Poppins",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 300,
            color: "#000",
            fontFamily: "Poppins",
          }}
        >
          {authors[0].name}
        </Typography>
      </div>
    </div>
  );
};

export default SearchBookCard;
