import { Typography } from "@mui/material";
import useAPI from "hooks/useApi";
import React from "react";
import { getBorrowingList } from "services/userAuth";
import ActivityItem from "./ActivityItem";

const BorrowList = () => {
  const activityRequest = useAPI({
    queryFn: getBorrowingList,
    getNow: true,
  });
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
        {activityRequest?.response?.data?.items?.map((activity) => (
          <ActivityItem
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
