import { Typography } from "@mui/material";
import dayjs from "dayjs";
import useAPI from "hooks/useApi";
import React from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "services/book";

const Book = () => {
  const { current_book_id } = useParams();
  const bookRequest = useAPI({
    queryFn: () => getBookById(current_book_id),
    getNow: true,
  });
  console.log(bookRequest.response);
  return (
    <div className="flex flex-col bg-[#D8E3FF33] pt-20 pb-[100px] items-center px-40">
      <div className="flex flex-row gap-[50px] items-center">
        <div className="flex flex-col gap-10">
          <div className="h-[500px] w-[350px] overflow-hidden">
            <img
              alt=""
              className="object-cover h-full w-auto"
              src={bookRequest?.response?.img_url}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <Typography
            sx={{
              fontSize: 40,
              fontWeight: 400,
              fontFamily: "Poppins",
              color: "#2D5A73",
            }}
          >
            {bookRequest?.response?.name}
          </Typography>
          <div className="grid grid-cols-2">
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Poppins",
                color: "#000",
              }}
            >
              Author:{" "}
              <span className="text-[#2D5A73]">
                {bookRequest?.response?.authors[0]?.name}
              </span>
              {bookRequest?.response?.authors.slice(1).map((author) => (
                <span className="text-[#2D5A73]" key={author.id}>
                  {", "} {author.name}
                </span>
              ))}
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Poppins",
                color: "#000",
              }}
            >
              Publisher:{" "}
              <span className="text-[#2D5A73]">
                {bookRequest?.response?.publisher.name}
              </span>
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Poppins",
                color: "#000",
              }}
            >
              Publish date:{" "}
              <span className="text-[#2D5A73]">
                {dayjs(bookRequest?.response?.release_date).format(
                  "DD/MM/YYYY"
                )}
              </span>
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Poppins",
                color: "#000",
              }}
            >
              Category:{" "}
              <span
                key={`${bookRequest?.response?.id} ${bookRequest?.response?.categories[0]}`}
                className="text-[#2D5A73]"
              >
                {bookRequest?.response?.categories[0]}
              </span>
              {bookRequest?.response?.categories
                .slice(1, 10)
                .map((category) => (
                  <span
                    key={`${bookRequest?.response?.id} ${category}`}
                    className="text-[#2D5A73]"
                  >
                    {" "}
                    {", "}
                    {category}
                  </span>
                ))}
            </Typography>
          </div>
          <div className="flex flex-col gap-5">
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "#2E4958",
              }}
            >
              Main content:{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 400,
                fontFamily: "Poppins",
                color: "#000",
              }}
            >
              {bookRequest?.response?.description.slice(0, 400)}
            </Typography>
          </div>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 600,
              fontFamily: "Poppins",
              color: "#2E4958",
            }}
          >
            Left over:{" "}
            <span className="text-[#787878]">
              {bookRequest?.response?.count}
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Book;
