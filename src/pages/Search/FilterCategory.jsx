import React, { useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import MyCheckBox from "components/MyCheckBox";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getSearchObject } from "../../services/getSearchObject";

const FilterCategory = () => {
  const [show_more, setShowMore] = useState(false);
  const rule = useSelector((state) => state.rule);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);

  const handleChange = (name, index) => {
    searchObject.page = 1;
    if (index === -1) {
      searchObject.category = [...searchObject.category, name];
      setSearchParams(new URLSearchParams(searchObject));
      return;
    }
    searchObject.category = [
      ...searchObject.category.slice(0, index),
      ...searchObject.category.slice(index + 1),
    ];
    setSearchParams(new URLSearchParams(searchObject));
  };

  if (!rule) return <CircularProgress />;
  return (
    <div className="flex flex-col gap-2">
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 700,
          color: "#2E4958",
          fontFamily: "Poppins",
          pb: "10px",
          borderBottom: "2px solid #2E4958",
          mb: "2px",
        }}
      >
        Categories
      </Typography>
      {(show_more ? rule.category : rule.category.slice(0, 5)).map((name) => {
        return (
          <CategoryItem
            key={name}
            title={name}
            onChange={handleChange}
            index={searchObject.category.findIndex((ele) => ele === name)}
          />
        );
      })}
      {rule.category.length > 5 && (
        <Typography
          onClick={() => setShowMore(!show_more)}
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "2E4958",
            cursor: "pointer",
            ":hover": { fontWeight: 700 },
          }}
        >
          {show_more ? "Show less" : "Show more"}
        </Typography>
      )}
    </div>
  );
};
const CategoryItem = ({ title, onChange, index = -1 }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <MyCheckBox
        value={index !== -1}
        onChange={() => onChange(title, index)}
      />
      <Typography sx={{ fontSize: 14, fontWeight: 400, color: "2E4958" }}>
        {title}
      </Typography>
    </div>
  );
};

export default FilterCategory;
