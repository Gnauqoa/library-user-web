import { IconButton, InputBase, SvgIcon, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as IconSearch } from "assets/icon/icon_search.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getSearchObject } from "services/getSearchObject";
import SelectAtom from "components/MySelect";

const CustomInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    width: 100,
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 14,
    padding: "12px 24px",
  },
}));

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [type, setType] = useState("Book name");
  const searchObject = getSearchObject(searchParams);
  useEffect(() => {
    if (searchObject?.name) {
      setType("Book name");
      setQuery(searchObject.name);
      return;
    }
    if (searchObject?.author_name) {
      setType("Author name");
      setQuery(searchObject.author_name);
      return;
    }
    if (searchObject?.isbn) {
      setType("ISBN");
      setQuery(searchObject.isbn);
    }
  }, [searchParams]);
  const handleSearch = () => {
    if (type === "Book name")
      navigate(`/search?name=${query}&page=1&per_page=15`);
    else if (type === "Author name")
      navigate(`/search?author_name=${query}&page=1&per_page=15`);
    else if (type === "isbn")
      navigate(`/search?isbn=${query}&page=1&per_page=15`);
  };
  return (
    <div className="flex flex-row">
      <div className="flex flex-row w-[600px] items-center gap-4  pr-[5px]  bg-[#fff] rounded-[25px] overflow-hidden">
        <div>
          <SelectAtom
            value={type}
            onChange={(e) => setType(e.target.value)}
            input={<CustomInput />}
            optionList={["Book name", "Author name", "ISBN"]}
          />
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Harry potter"
          className="outline-none text-[16px] w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <IconButton
          onClick={handleSearch}
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
