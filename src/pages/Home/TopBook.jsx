import { CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import BookCard from "components/BookCard";
import HorizontalScroll from "components/HorizontalScroll";
import React from "react";
import { getTopBook } from "services/home";

const TopBook = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["hotBook"],
    initialData: [],
    queryFn: getTopBook,
  });
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
      {isFetched ? (
        <HorizontalScroll>
          {data.items.map((data) => (
            <BookCard key={data.id} count={data.count} {...data.book} />
          ))}
        </HorizontalScroll>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default TopBook;
