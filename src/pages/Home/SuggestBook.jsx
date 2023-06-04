import { Button, Typography } from "@mui/material";
import React from "react";

const SuggestBook = () => {
  return (
    <div className="flex flex-row gap-[144px]">
      <div className="flex flex-col gap-6">
        <Typography sx={{ fontSize: 56, fontWeight: 600, color: "#0D0842" }}>
          New Releases This Week
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 400, color: "#2E4958" }}>
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </Typography>
        <Button sx={{ borderRadius: "8px" }} variant="primary filled">
          Details
        </Button>
      </div>
    </div>
  );
};

export default SuggestBook;
