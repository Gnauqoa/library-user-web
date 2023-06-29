import { Container } from "@mui/material";
import React, { useState } from "react";
import Filter from "./Filter";
import ResultSearch from "./ResultSearch";
import PageControl from "./PageControl";

const SearchBook = () => {
  return (
    <Container>
      <div className="flex flex-row gap-[40px] pt-[40px] w-full">
        <Filter />
        <ResultSearch />
      </div>
    </Container>
  );
};

export default SearchBook;
