import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useAPI from "hooks/useApi";
import React from "react";
import { Link } from "react-router-dom";
import { getNewBook } from "services/home";

const NewBook = () => {
  const newBookRequest = useAPI({ queryFn: getNewBook, getNow: true });
  return (
    <div className="flex flex-row gap-[144px] bg-[#A6BBCD] py-[140px] justify-center">
      <div className="flex flex-col gap-6">
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 600,
            color: "#0D0842",
            fontFamily: "Lato, sans-serif",
          }}
        >
          New Releases This Week
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 16,
            fontWeight: 400,
            color: "#2E4958",
            width: 500,
          }}
        >
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </Typography>
        {/* <Button sx={{ borderRadius: "8px" }} variant="primary filled">
          Details
        </Button> */}
      </div>
      {newBookRequest.loading ? (
        <CircularProgress
          color="primary"
          size={60}
          sx={{ color: "primary.main" }}
        />
      ) : (
        <></>
      )}
      {newBookRequest.isFetched ? (
        <div className="flex flex-row items-center relative">
          {newBookRequest?.response?.items?.map((book, index) => (
            <BookItem
              key={`${book.id}`}
              index={index}
              url={book.img_url}
              id={book.id}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
const BookItem = ({ index, url, id }) => {
  const height = index === 2 ? 250 : index ? 300 : 350;
  return (
    <Box
      sx={{
        overflow: "hidden",
        zIndex: (3 - index) * 10,
        marginLeft: index ? -10 : 0,
        height: height,
        boxShadow: "0px 0px 19px 6px rgba(0,0,0,0.2)",
        borderRadius: "8px",
        transition: "all 0.2s",
        borderColor: "primary.main",

        ":hover": {
          borderWidth: "4px",
          borderStyle: "solid",
          marginLeft: index ? -1 : 0,
        },
      }}
    >
      <Link to={`/book/${id}`}>
        <img alt="" src={url} className="object-cover h-full" />
      </Link>
    </Box>
  );
};
export default NewBook;
