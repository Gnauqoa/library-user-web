import { CircularProgress, Typography } from "@mui/material";
import BookCard from "components/BookCard";
import HorizontalScroll from "components/HorizontalScroll";
import useAPI from "hooks/useApi";
import React from "react";
import { getRecommend } from "services/home";

const RecommendBook = () => {
  const recommendBookRequest = useAPI({ queryFn: getRecommend, getNow: true });
  console.log(recommendBookRequest)
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
      {recommendBookRequest.loading ? (
        <CircularProgress />
      ) : (
        <HorizontalScroll>
          {recommendBookRequest?.response?.items.map((data) => (
            <BookCard key={data.id} count={data.count} {...data} />
          ))}
        </HorizontalScroll>
      )}
    </div>
  );
};

export default RecommendBook;
