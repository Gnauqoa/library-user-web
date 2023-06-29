import { Button, CircularProgress, Typography } from "@mui/material";
import useAPI from "hooks/useApi";
import React, { useEffect, useState } from "react";
import { getActivity } from "services/user";
import ActivityItem from "./ActivityItem";
import { useCounter } from "@uidotdev/usehooks";

function Activity() {
  const activityRequest = useAPI({
    queryFn: ({ per_page = 3, current_page = 1 }) => {
      return getActivity(per_page, current_page);
    },
  });
  const [activity_list, setActivityList] = useState({ items: [] });
  const [current_page, { increment }] = useCounter(0);
  const handleLoadMore = () => {
    increment();
    activityRequest
      .run({
        per_page: 3,
        current_page: current_page + 1,
      })
      .then((res) => {
        setActivityList((prev) => ({
          ...res?.data,
          items: [...prev?.items, ...res?.data?.items],
        }));
      });
  };
  useEffect(() => {
    handleLoadMore();
  }, []);
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
        Activity
      </Typography>

      <div className="flex flex-col gap-6 items-center w-full">
        {activity_list.items.map((activity) => (
          <ActivityItem
            max_borrow_days={activityRequest.response.data.max_borrow_days}
            key={activity.id + activity.type}
            {...activity}
          />
        ))}
        {current_page < activity_list?.total_pages ? (
          !activityRequest.loading && activity_list ? (
            <Button
              onClick={handleLoadMore}
              variant="primary filled"
              sx={{ borderRadius: "90px" }}
            >
              Load more
            </Button>
          ) : (
            <CircularProgress />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Activity;
