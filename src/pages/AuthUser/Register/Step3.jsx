import { Button, SvgIcon, Typography } from "@mui/material";
import MyInput from "components/MyInput";
import React, { useState } from "react";
import getErrorMessage from "services/validate";
import { ReactComponent as IconLock } from "assets/icon/icon_lock.svg";
import { ReactComponent as IconArrowRight } from "assets/icon/icon_arrow_right.svg";

const Step3 = ({ formValue, setFormValue, setStep }) => {
  const [errorMessage, setErrorMessage] = useState({
    confirm_password: false,
    password: false,
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
      errorMessage.password ||
      formValue.password !== formValue.confirm_password ||
      !formValue.password.length
    );
  };
  return (
    <div className="flex flex-col gap-6">
      <Typography
        sx={{
          fontFamily: "Lato",
          fontSize: 32,
          fontWeight: 700,
          color: "#2C2C2C",
          textAlign: "center",
        }}
      >
        Sign up to TR Library
      </Typography>
      <MyInput
        onBlur={handleComplete}
        value={formValue.password}
        error_message={
          errorMessage.password
            ? "Password length must be longer than 8, have 1 uppercase, 1 lowercase and 1 number"
            : ""
        }
        onChange={handleChange}
        type="password"
        startIcon={IconLock}
        label="Password"
        name="password"
        placeholder="***************"
      />
      <MyInput
        onBlur={handleComplete}
        value={formValue.confirm_password}
        error_message={
          formValue.confirm_password !== formValue.password
            ? "Confirm password is not match with password"
            : ""
        }
        onChange={handleChange}
        type="password"
        startIcon={IconLock}
        label="Confirm Password"
        name="confirm_password"
        placeholder="***************"
      />{" "}
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
        Create an account
        <SvgIcon
          sx={{ width: 20, height: 20 }}
          inheritViewBox={true}
          component={IconArrowRight}
        />
      </Button>
    </div>
  );
};

export default Step3;
