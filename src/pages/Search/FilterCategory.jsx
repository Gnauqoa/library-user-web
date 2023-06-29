import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import MyCheckBox from "components/MyCheckBox";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const FilterCategory = () => {
  const rule = useSelector((state) => state.rule);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchObject = Object.fromEntries([...searchParams]);
  let category = [];
  if (searchObject.category)
    category = searchObject.category.split(",").map((e) => e);

  console.log("", category);
  const handleChange = (name, index) => {
    if (index === -1) {
      searchObject.category = [...category, name];
      setSearchParams(new URLSearchParams(searchObject));
      return;
    }
    searchObject.category = [
      ...category.slice(0, index),
      ...category.slice(index + 1),
    ];
    setSearchParams(new URLSearchParams(searchObject));
  };

  if (!rule) return <CircularProgress />;
  return (
    <div className="flex flex-col gap-2">
      <Typography
        sx={{
          fontSize: 12,
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
      {rule.category.map((name) => {
        return (
          <CategoryItem
            key={name}
            title={name}
            onChange={handleChange}
            index={category.findIndex((ele) => ele === name)}
          />
        );
      })}
    </div>
  );
};
const CategoryItem = ({ title, onChange, index = -1 }) => {
  return (
    <div className="flex flex-row items-center">
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
