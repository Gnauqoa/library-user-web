import React from "react";
import Logo from "assets/img/logo.svg";
import SearchBox from "./SearchBox";
import MenuAuth from "./MenuAuth";

const AppBar = () => {
  return (
    <div className="flex flex-row justify-center items-center  w-full py-[15px] px-[28px] bg-[#0F3245]">
      <img src={Logo} alt="" className="h-[40px] mr-auto" />
      <SearchBox />
      <div className="ml-auto">
        <MenuAuth />
      </div>
    </div>
  );
};

export default AppBar;
