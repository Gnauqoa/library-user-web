import React from "react";
import NewBook from "./NewBook";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <NewBook />
      <Container>
        <div className="flex flex-col pt-16 gap-8">

        </div>
      </Container>
    </div>
  );
};

export default HomePage;
