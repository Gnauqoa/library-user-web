import { CircularProgress, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as IconInfo } from "assets/icon/icon_info.svg";
import SearchBookCard from "components/SearchBookCard";
import useAPI from "hooks/useApi";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBook } from "services/search";
import { getSearchObject } from "./getSearchObject";

const ResultSearch = () => {
  const [searchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);
  const searchRequest = useAPI({ queryFn: (params) => searchBook(params) });
  useEffect(() => {
    searchRequest.run(searchObject);
  }, [searchParams]);
  return (
    <div className="flex flex-col gap-10 min-w-[80%]">
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
          <span className="text-[#266E96]"> {searchObject.name}</span>
        </Typography>
      </div>
      {searchRequest.loading ? <CircularProgress /> : <></>}
      {searchRequest.isFetched ? (
        <div className="grid grid-cols-5 gap-x-[50px] pb-[50px]">
          {searchRequest.response.items.map((book) => (
            <SearchBookCard key={book.id} {...book} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResultSearch;
