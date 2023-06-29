import { Button, IconButton, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as IconArrowLeft } from "assets/icon/icon_arrow_left.svg";
import { ReactComponent as IconArrowRight } from "assets/icon/icon_arrow_right.svg";
import { useSearchParams } from "react-router-dom";
import { getSearchObject } from "services/getSearchObject";

const PageControl = ({ total_pages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);
  const current_page = parseInt(searchObject.page);
  const setCurrentPage = (new_page) => {
    searchObject.page = new_page;
    setSearchParams(new URLSearchParams(searchObject));
  };
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <IconButton
        disabled={current_page === 1}
        sx={{ p: 0 }}
        onClick={() => setCurrentPage(current_page - 1)}
      >
        <SvgIcon
          component={IconArrowLeft}
          inheritViewBox={true}
          sx={{ width: 24, height: 24 }}
        />
      </IconButton>
      <div className="flex flex-row items-center overflow-auto max-w-[300px] gap-3">
        {createOptionList(total_pages).map((page) => (
          <Button
            onClick={() => setCurrentPage(page)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "40px",
              minHeight: "40px",
              maxWidth: "40px",
              maxHeight: "40px",
              borderRadius: "12px",
              background: current_page === page ? "#6BADB1" : "transparent",
              ":hover": {
                background: current_page === page ? "#6BADB1" : "transparent",
              },
            }}
            key={`${page}`}
          >
            <Typography
              sx={{ fontSize: 14, fontWeight: 400, fontFamily: "Poppins" }}
            >
              {page}
            </Typography>
          </Button>
        ))}
      </div>
      <IconButton
        disabled={current_page === total_pages}
        onClick={() => setCurrentPage(current_page + 1)}
        sx={{ p: 0 }}
      >
        <SvgIcon
          component={IconArrowRight}
          inheritViewBox={true}
          sx={{ width: 24, height: 24 }}
        />
      </IconButton>
    </div>
  );
};
function createOptionList(total_pages) {
  const result = [];
  for (let i = 1; i <= total_pages; i++) result.push(i);
  return result;
}
export default PageControl;
