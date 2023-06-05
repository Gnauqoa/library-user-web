import { CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import BookCard from "components/BookCard";
import HorizontalScroll from "components/HorizontalScroll";
import React from "react";
import { getRecommend } from "services/home";

const RecommendBook = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["recommendBook"],
    initialData: [],
    queryFn: getRecommend,
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
        Recommend:
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

export default RecommendBook;
