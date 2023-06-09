import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

const ActivityItem = ({
  type,
  fine,
  fine_pay,
  max_borrow_days,
  borrow_date,
  return_date,
  borrow_days,
  book,
  pay_date,
  status,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        alignItems: "center",
        boxShadow: "0px 0px 23px 8px rgba(0,0,0,0.1)",
        borderRadius: "16px",
        width: "100%",
      }}
    >
      {type !== "payFine" ? (
        <>
          <div className="flex flex-col min-w-[110px] max-w-[110px] min-h-[150px] max-h-[150px] overflow-hidden items-center justify-center rounded-[8px]">
            <img
              src={book.details_book.img_url}
              alt=""
              className="h-full  object-cover rounded-[8px]"
            />
          </div>
          <div className="flex flex-col gap-4 pl-[30px]">
            <Typography sx={{ fontSize: 28, fontWeight: 500, color: "#000" }}>
              {book.details_book.name}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                color: "#000",
                fontFamily: "Poppins",
              }}
            >
              Author:{" "}
              <span className="font-[300]">{` ${book.details_book.authors[0].name}`}</span>
            </Typography>
            <div className="flex flex-row gap-3 w-full">
              <ShowDate
                type={type}
                borrow_date={borrow_date}
                return_date={return_date}
              />
              {type === "returnBook" ? (
                <ShowDate
                  type={"borrowBook"}
                  borrow_date={borrow_date}
                  return_date={return_date}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <ShowDate type={type} pay_date={pay_date} />
        </>
      )}
      <ShowType
        type={type}
        borrow_days={borrow_days}
        fine={fine}
        max_borrow_days={max_borrow_days}
        fine_pay={fine_pay}
        borrow_date={borrow_date}
        status={status}
      />
    </Box>
  );
};
const ShowType = ({
  type,
  borrow_days,
  borrow_date,
  fine,
  max_borrow_days,
  fine_pay,
  status,
}) => {
  let color,
    text,
    sub_text = null;
  if (type === "returnBook") {
    if (fine) {
      sub_text = `- ${fine}`;
      color = "#FF7171";
      text = "Fining";
    } else {
      color = "#AFE3EE";
      text = "Return";
    }
  } else if (type === "borrowBook") {
    if (!status && dayjs().diff(borrow_date, "day") > max_borrow_days) {
      sub_text = `Out ${
        dayjs().diff(borrow_date, "day") - max_borrow_days
      } days`;
      color = "#FF7171";
      text = "Out of date";
    } else {
      color = "#F0E68E";
      text = "Borrow";
    }
  } else {
    sub_text = `+ ${fine_pay}`;
    color = "#449E3C";
    text = "Pay fine";
  }
  return (
    <div className="flex flex-col items-center ml-auto gap-4">
      {sub_text ? (
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color,
            fontFamily: "Poppins",
            whiteSpace: "nowrap",
          }}
        >
          {sub_text}
        </Typography>
      ) : (
        <></>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingY: "4px",
          paddingX: "24px",
          borderRadius: "999px",
          background: color,
          border: `2px solid ${color}`,
          transition: "all 0.5s ease",
          ":hover": {
            background: "#fff",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "#000",
            fontFamily: "Poppins",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </Typography>
      </Box>
    </div>
  );
};

const ShowDate = ({ type, borrow_date, return_date }) => {
  return (
    <Typography
      sx={{
        fontSize: 16,
        fontWeight: 400,
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      {type === "returnBook"
        ? "Return date: "
        : type === "borrowBook"
        ? "Borrow date: "
        : "Pay date: "}
      <span className="font-[300]">
        {dayjs(type === "returnBook" ? return_date : borrow_date).format(
          "DD/MM/YYYY"
        )}
      </span>
    </Typography>
  );
};
export default ActivityItem;
