import { Container } from "@mui/material";
import React, { useState } from "react";
import Filter from "./Filter";
import ResultSearch from "./ResultSearch";

const SearchBook = () => {
  return (
    <Container>
      <div className="flex flex-row gap-[80px] pt-[40px]">
        <Filter />
        <ResultSearch />
      </div>
    </Container>
  );
};

export default SearchBook;
