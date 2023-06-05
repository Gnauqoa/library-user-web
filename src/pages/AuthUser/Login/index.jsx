import { Box, Button, Typography } from "@mui/material";
import MyInput from "components/MyInput";
import React from "react";
import { ReactComponent as IconUser } from "assets/icon/icon_user.svg";
import { ReactComponent as IconLock } from "assets/icon/icon_lock.svg";
import MyCheckBox from "components/MyCheckBox";

const UserLogin = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Box
        sx={{
          display: "flex",
          padding: "24px 48px",
          flexDirection: "column",
          boxShadow:
            "0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)",
          borderRadius: "24px",
          background: "#fff",
          position: "relative",
          width: "560px",
          gap: "16px",
        }}
      >
        <div className="absolute w-[70px] h-[70px] rounded-full bg-primary-main top-[-20px] left-[-20px]"></div>{" "}
        <div className="absolute w-[70px] h-[70px] rounded-full bg-primary-main bottom-[-20px] right-[-20px]"></div>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: 32,
            fontWeight: 700,
            color: "#2C2C2C",
            textAlign: "center",
          }}
        >
          Sign in
        </Typography>
        <MyInput
          startIcon={IconUser}
          label="Email"
          name="email"
     
          placeholder="lbr123@gmail.com"
        />
        <MyInput
          type="password"
          startIcon={IconLock}
          label="Password"
          name="password"
          placeholder="***************"
        />
        <MyCheckBox label="Stay sign in" />
        <div className="flex flex-col gap-8">
          <Button
            sx={{ borderRadius: 12, width: "100%", marginTop: "36px" }}
            variant="primary filled"
          >
            Sign in
          </Button>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              textAlign: "center",
              color: "text_neutral.main",
            }}
          >
            Can't sign in?{" "}
            <span className="text-primary-main font-[700]">Create account</span>
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default UserLogin;
