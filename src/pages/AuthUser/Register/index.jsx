import { Box, SvgIcon, Typography } from "@mui/material";
import React, { useState } from "react";
import Step1 from "./Step1";
import { ReactComponent as ImgStar } from "assets/img/img_star.svg";
import Step2 from "./Step2";
import { Link } from "react-router-dom";
import Step3 from "./Step3";

const UserRegister = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirm_password: "",
    birth: null,
    first_name: "",
    last_name: "",
    card_type: "",
  });
  const [step, setStep] = useState(1);
  return (
    <div className="flex flex-row w-full h-full gap-[200px] ">
      <Typography
        sx={{
          fontSize: 80,
          fontWeight: 700,
          color: "#fff",
          marginLeft: "180px",
          marginTop: "auto",
          marginBottom: "200px",
          fontFamily: "Lato",
        }}
      >
        CREATE AN <br /> ACCOUNT
      </Typography>
      <div className="flex flex-col items-center justify-center">
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
            gap: "24px",
          }}
        >
          <SvgIcon
            component={ImgStar}
            inheritViewBox={true}
            sx={{
              width: 70,
              height: "auto",
              position: "absolute",
              bottom: 5,
              right: 5,
            }}
          />
          <div className="absolute w-[70px] h-[70px] rounded-full bg-primary-main bottom-[-20px] right-[-20px]"></div>{" "}
          {step === 1 ? (
            <Step1
              formValue={formValue}
              setFormValue={setFormValue}
              setStep={setStep}
            />
          ) : step === 2 ? (
            <Step2
              formValue={formValue}
              setFormValue={setFormValue}
              setStep={setStep}
            />
          ) : (
            <Step3
              formValue={formValue}
              setFormValue={setFormValue}
              setStep={setStep}
            ></Step3>
          )}
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              color: "#242D3F",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
          >
            Already a member? Go to{" "}
            <Link to="/auth/login">
              <span className="text-[#4D809C] font-[700]">Login.</span>
            </Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default UserRegister;
