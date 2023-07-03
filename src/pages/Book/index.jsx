import { CircularProgress, Container, Typography } from "@mui/material";
import BookCard from "components/BookCard";
import HorizontalScroll from "components/HorizontalScroll";
import ReadMore from "components/ReadMore";
import dayjs from "dayjs";
import useAPI from "hooks/useApi";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "services/book";
import { getNewBook, getRecommend } from "services/home";

const Book = () => {
  const { current_book_id } = useParams();
  const bookRequest = useAPI({
    queryFn: () => getBookById(current_book_id),
  });
  useEffect(() => {
    bookRequest.run();
  }, [current_book_id]);
  if (bookRequest.loading) return <CircularProgress />;
  return (
    <div className="flex flex-col gap-[70px] bg-[#D8E3FF33]">
      <Container className="flex flex-col  pt-20 pb-[100px]   ">
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
                Number of pages:{" "}
                <span className="text-[#2D5A73]">
                  {bookRequest?.response?.number_of_pages}
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
                Isbn:{" "}
                <span className="text-[#2D5A73]">
                  {bookRequest?.response?.isbn}
                </span>
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Poppins",
                  color: "#000",
                }}
              >
                Languages:{" "}
                <ReadMore
                  className="text-[#2D5A73]"
                  maxlength={50}
                  text={
                    "" +
                    bookRequest?.response?.languages.map(
                      (language) => ` ${language}`
                    )
                  }
                />
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
                <ReadMore
                  className="text-[#2D5A73]"
                  maxlength={50}
                  text={
                    "" +
                    bookRequest?.response?.categories.map(
                      (category) => ` ${category}`
                    )
                  }
                />
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

              <ReadMore
                text={bookRequest?.response?.description.split("\r\n")[0]}
                className="text-[20px] font-[400] text-[#000]"
              />
            </div>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "#2E4958",
              }}
            >
              Available/Total:{" "}
              <span className="text-[#787878]">
                {bookRequest?.response?.available_book}/
                {bookRequest?.response?.total_book}
              </span>
            </Typography>
          </div>
        </div>
      </Container>
      <Suggest />
    </div>
  );
};
const Suggest = () => {
  const suggestRequest = useAPI({ queryFn: getRecommend, getNow: true });
  if (suggestRequest.loading) return <CircularProgress />;
  return (
    <div className="w-full bg-[#fff] py-[70px]">
      <Container>
        <Typography
          sx={{
            color: "#2D5A73",
            fontSize: 24,
            fontWeight: 500,
            fontFamily: "Poppins",
          }}
        >
          You may also like:
        </Typography>
        <HorizontalScroll>
          {suggestRequest?.response?.items.map((book) => (
            <BookCard key={book.id} count={book.available_book} {...book} />
          ))}
        </HorizontalScroll>
      </Container>
    </div>
  );
};
export default Book;
