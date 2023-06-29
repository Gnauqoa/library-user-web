import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";

const SearchBookCard = ({
  id,
  name,
  authors,
  img_url,
  available_book,
  total_book,
  isbn,
  release_date,
  number_of_pages,
}) => {
  return (
    <Link to={`/book/${id}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 16px",
          gap: "15px",
          transition: "all 0.2s ease",
          ":hover": {
            boxShadow: "0px 12px 22px 14px rgba(0,0,0,0.1)",
          },
          borderRadius: "24px",
          overflow: "hidden",
          width: 200,
        }}
      >
        <div className="flex flex-col justify-center items-center h-[250px] rounded-[12px]  overflow-hidden">
          <img
            alt=""
            src={img_url}
            className="h-full w-auto object-cover rounded-[12px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              color: "#000",
              fontFamily: "Poppins",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 300,
              color: "#000",
              fontFamily: "Poppins",
            }}
          >
            {authors[0].name}
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Poppins",
              color: "#2E4958",
            }}
          >
            Available/Total:{" "}
            <span className="text-[#787878]">
              {available_book}/{total_book}
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Poppins",
              color: "#2E4958",
            }}
          >
            Number of pages:{" "}
            <span className="text-[#787878]">{number_of_pages}</span>
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Poppins",
              color: "#2E4958",
            }}
          >
            Release year:{" "}
            <span className="text-[#787878]">
              {dayjs(release_date).get("year")}
            </span>
          </Typography>
        </div>
      </Box>
    </Link>
  );
};

export default SearchBookCard;
