import React from "react";
import SearchBox from "./SearchBox";
import MenuAuth from "./MenuAuth";
import { SvgIcon } from "@mui/material";
import { ReactComponent as Logo } from "assets/img/logo.svg";

const AppBar = () => {
  return (
    <div className="flex flex-row justify-center items-center  w-full py-[15px] px-[28px] bg-[#0F3245]">
      <SvgIcon
        inheritViewBox={true}
        sx={{ height: 50, width: "auto", color: "#fff", marginRight: "auto" }}
        component={Logo}
      />
      <SearchBox />
      <div className="ml-auto">
        <MenuAuth />
      </div>
    </div>
  );
};

export default AppBar;
