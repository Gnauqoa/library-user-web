import { Typography } from "@mui/material";
import React from "react";
import BorrowingItem from "./BorrowingItem";

const BorrowList = ({ getBorrowingRequest }) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Typography
        sx={{
          fontSize: 32,
          fontWeight: 600,
          color: "#000",
          fontFamily: "Poppins",
        }}
      >
        Borrowing
      </Typography>
      <div className="flex flex-col gap-6 items-center w-full">
        {getBorrowingRequest?.response?.data?.items?.map((activity) => (
          <BorrowingItem
            max_borrow_days={getBorrowingRequest.response.data.max_borrow_days}
            type="borrowBook"
            key={activity.id + activity.type}
            {...activity}
          />
        ))}
      </div>
    </div>
  );
};

export default BorrowList;
