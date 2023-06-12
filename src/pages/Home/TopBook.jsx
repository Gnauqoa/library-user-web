import { CircularProgress, Typography } from "@mui/material";
import BookCard from "components/BookCard";
import HorizontalScroll from "components/HorizontalScroll";
import useAPI from "hooks/useApi";
import React from "react";
import { getTopBook } from "services/home";

const TopBook = () => {
  const topBookRequest = useAPI({ queryFn: getTopBook, getNow: true });
  return (
    <div className="flex flex-col ">
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: 24,
          fontWeight: 400,
        }}
      >
        Top borrowed:
      </Typography>
      {topBookRequest.loading ? (
        <CircularProgress />
      ) : (
        <HorizontalScroll>
          {topBookRequest?.response?.items.map((data) => (
            <BookCard key={data.id} count={data.count} {...data} />
          ))}
        </HorizontalScroll>
      )}
    </div>
  );
};

export default TopBook;
