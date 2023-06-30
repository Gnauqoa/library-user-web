import { CircularProgress, Typography } from "@mui/material";
import MyCheckBox from "components/MyCheckBox";
import useCustomSearchParams from "hooks/useCustomSearchParams";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const FilterLanguages = () => {
  const [searchParams, setSearchParams] = useCustomSearchParams();
  const [show_more, setShowMore] = useState(false);
  const rule = useSelector((state) => state.rule);
  const handleChange = (name, index) => {
    searchParams.page = 1;
    if (index === -1) {
      searchParams.languages = [...searchParams.languages, name];
      setSearchParams(searchParams);
      return;
    }
    searchParams.languages = [
      ...searchParams.languages.slice(0, index),
      ...searchParams.languages.slice(index + 1),
    ];
    setSearchParams(searchParams);
  };
  if (!rule) return <CircularProgress />;

  return (
    <div className="flex flex-col gap-2">
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 700,
          color: "#2E4958",
          pb: "10px",
          borderBottom: "2px solid #2E4958",
          mb: "2px",
        }}
      >
        Languages
      </Typography>{" "}
      {(show_more ? rule.languages : rule.languages.slice(0, 5)).map((name) => {
        return (
          <LanguageItem
            key={name}
            title={name}
            onChange={handleChange}
            index={searchParams.languages.findIndex((ele) => ele === name)}
          />
        );
      })}
      {rule.languages.length > 5 && (
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
const LanguageItem = ({ title, onChange, index = -1 }) => {
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
export default FilterLanguages;
