import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styled from "@mui/system/styled";
import { useNavigate } from "react-router-dom";
import ReadMore from "components/ReadMore";
const CustomButton = styled(Button)(({ variant }) => ({
  paddingX: 12,
  paddingLeft: 20,
  marginTop: "auto",
  borderRadius: 8,
}));

const BookCard = ({
  id,
  name,
  authors,
  img_url,
  available_book,
  total_book,
  isbn,
  release_date,
  number_of_pages,
  categories,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ ":hover": { boxShadow: "0px 0px 14px 6px rgba(0,0,0,0.1)" } }}
      className="flex flex-row min-w-[400px] relative gap-5 p-4 rounded-[12px] overflow-hidden"
    >
      <div className="h-full min-w-[180px] max-w-[180px] overflow-hidden flex flex-col items-center justify-center">
        <img src={img_url} alt="" className="h-[250px] w-auto object-cover " />
      </div>
      <div className="flex flex-col min-w-[35%] gap-3">
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 16,
            fontWeight: 400,
            color: "#0D0842",
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
        </Typography>
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
            fontWeight: 400,
            fontFamily: "Poppins",
            color: "#2E4958",
          }}
        >
          Category:{" "}
          <ReadMore
            className="text-[#2D5A73]"
            maxlength={50}
            text={"" + categories.map((category) => ` ${category}`)}
          />
        </Typography>
        <CustomButton
          onClick={() => navigate(`/book/${id}`)}
          variant="primary filled"
        >
          Details
        </CustomButton>
      </div>
    </Box>
  );
};

export default BookCard;
