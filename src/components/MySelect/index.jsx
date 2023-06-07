import {
  Select,
  Typography,
  MenuItem,
  FormControl,
  SvgIcon,
} from "@mui/material";
import React from "react";
import { ReactComponent as IconArrowDown } from "assets/icon/icon_arrow_down.svg";

const SelectAtom = ({
  label,
  labelIcon,
  value = "",
  setValue,
  optionList = [],
  placeholder,
  ...props
}) => {
  const handleChange = (event) => {
    setValue(event);
  };
  return (
    <FormControl className="flex flex-col w-full gap-2">
      <div className="flex flex-row gap-2">
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#121115",
          }}
        >
          {label}
        </Typography>
        <img alt="" className="max-w-[14px] maw-h-[14px]" src={labelIcon} />
      </div>
      <div className="flex flex-col ">
        <Select
          IconComponent={IconArrowDown}
          defaultValue={value}
          {...props}
          value={value}
          displayEmpty
          renderValue={
            value !== ""
              ? undefined
              : () => (
                  <Typography
                    sx={{ color: "#9D9AA4", fontSize: 14, fontWeight: 400 }}
                  >
                    {placeholder}
                  </Typography>
                )
          }
          sx={{
            padding: "0px",
            "&.MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#DEDDE1",
                borderRadius: "12px",
                padding: "12px 15px",
              },
              "&:hover fieldset": {
                borderColor: "#DEDDE1",
                boxShadow: "0px 0px 2px 2px #FFF1F8",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                boxShadow: " 0px 0px 2px 2px #F3C2DA",
              },
            },
          }}
          onChange={handleChange}
          inputProps={{
            "aria-label": "Without label",
          }}
        >
          {optionList.map((data, index) => (
            <MenuItem
              key={label + "select " + index}
              sx={{
                "&.MuiButtonBase-root:": {
                  background: "#FBEBF3",
                },
              }}
              value={data}
            >
              <Typography
                sx={{
                  color: "#121115",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                {data}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </div>
    </FormControl>
  );
};

export default SelectAtom;
