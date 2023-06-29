import { IconButton, SvgIcon } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as IconSearch } from "assets/icon/icon_search.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getSearchObject } from "services/getSearchObject";

const SearchBox = () => {
  const [book_name, setBookName] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);
  useEffect(() => {
    if (searchObject?.name) setBookName(searchObject.name);
  }, [searchParams]);
  return (
    <div className="flex flex-row">
      <div className="flex flex-row w-[600px] items-center gap-4 pl-4 pr-[5px] py-[5px] bg-[#fff] rounded-[25px] overflow-hidden">
        <input
          value={book_name}
          onChange={(e) => setBookName(e.target.value)}
          placeholder="Harry potter"
          className="outline-none text-[16px] w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter")
              navigate(`/search?name=${book_name}&page=1&per_page=15`);
          }}
        />
        <IconButton
          onClick={() => {
            navigate(`/search?book_name=${book_name}`);
          }}
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
