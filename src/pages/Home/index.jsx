import React from "react";
import NewBook from "./NewBook";
import { Container } from "@mui/material";
import TopBook from "./TopBook";
import RecommendBook from "./Recommend";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full pb-20">
      <NewBook />
      <Container>
        <div className="flex flex-col pt-16 gap-8">
          <TopBook />
          <RecommendBook />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
