import { Box, Button, SvgIcon, Typography } from "@mui/material";
import MyInput from "components/MyInput";
import React, { useState } from "react";
import getErrorMessage from "services/validate";
import { ReactComponent as IconSms } from "assets/icon/icon_sms.svg";
import { ReactComponent as IconLocation } from "assets/icon/icon_location.svg";
import { ReactComponent as IconArrowRight } from "assets/icon/icon_arrow_right.svg";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/material";

import { Link } from "react-router-dom";

const DateDisplay = styled(DatePicker)(({ theme }) => ({
  ".MuiInputBase-root": {
    borderRadius: "12px",
    ":hover": {
      boxShadow: "0px 0px 5px 5px #C3E8FF",
    },
    ":focus": {
      borderColor: "primary.main",
      boxShadow: " 0px 0px 5px 5px #C3E8FF",
    },
  },
  "& input": { border: 0, borderColor: "#fff" },
}));
const Step1 = ({ formValue, setFormValue, setStep }) => {
  const [errorMessage, setErrorMessage] = useState({
    email: false,
    birth: false,
    first_name: false,
    last_name: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    if (isError(name))
      setErrorMessage({
        ...errorMessage,
        [name]: getErrorMessage(name, value),
      });
  };
  const handleComplete = (e) => {
    const { name, value } = e.currentTarget;
    setErrorMessage({ ...errorMessage, [name]: getErrorMessage(name, value) });
  };
  const isError = (name) => {
    return errorMessage[name].length;
  };
  const isDisable = () => {
    return (
      errorMessage.email ||
      errorMessage.birth ||
      errorMessage.first_name ||
      errorMessage.last_name ||
      !formValue.email.length ||
      !formValue.first_name.length ||
      !formValue.last_name.length ||
      !formValue.birth
    );
  };
  return (
    <div className="flex flex-col gap-6">
      <Typography
        sx={{
          fontSize: 32,
          fontWeight: 700,
          fontFamily: "Lato",
          color: "#2C2C2C",
          textAlign: "center",
        }}
      >
        Fill in the information
      </Typography>
      <div className="flex flex-col gap-2">
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#121115",
            fontFamily: "Poppins",
          }}
        >
          Full name
        </Typography>
        <div className="flex flex-row gap-4">
          <MyInput
            value={formValue.first_name}
            name="first_name"
            onChange={handleChange}
            onBlur={handleComplete}
            error_message={
              errorMessage.first_name ? "First name can't be empty" : ""
            }
          />
          <MyInput
            value={formValue.last_name}
            onBlur={handleComplete}
            name="last_name"
            onChange={handleChange}
            error_message={
              errorMessage.last_name ? "Last name can't be empty" : ""
            }
          />
        </div>
      </div>
      <MyInput
        onChange={handleChange}
        onBlur={handleComplete}
        value={formValue.email}
        startIcon={IconSms}
        error_message={errorMessage.email ? "Email is not valid" : ""}
        label="Email"
        name="email"
        placeholder="lbr123@gmail.com"
      />
      <div className="flex flex-col gap-2">
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#121115",
            fontFamily: "Poppins",
          }}
        >
          Birthday
        </Typography>
        <DateDisplay
          value={formValue.birth}
          onChange={(newValue) =>
            setFormValue((prev) => ({ ...prev, birth: newValue }))
          }
        />
      </div>
      <MyInput
        onChange={(e) =>
          setFormValue({
            ...formValue,
            [e.name]: e.value,
          })
        }
        value={formValue.address}
        startIcon={IconLocation}
        label={
          <>
            Address{" "}
            <span className="text-[#9D9AA4] font-[400]">(optional)</span>
          </>
        }
        name="address"
        placeholder="12 ngõ 123"
      />
      <Button
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: 16,
          borderRadius: 90,
          width: "100%",
        }}
        disabled={isDisable()}
        variant="primary filled"
        onClick={() => setStep(2)}
      >
        Next
        <SvgIcon
          sx={{ width: 20, height: 20 }}
          inheritViewBox={true}
          component={IconArrowRight}
        />
      </Button>
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
    </div>
  );
};

export default Step1;
