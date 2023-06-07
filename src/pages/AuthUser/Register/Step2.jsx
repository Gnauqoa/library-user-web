import { Button, SvgIcon, Typography } from "@mui/material";
import MySelect from "components/MySelect";
import React from "react";
import IconQuestion from "assets/icon/icon_question.svg";
import { ReactComponent as IconArrowRight } from "assets/icon/icon_arrow_right.svg";

const cardOption = ["Loyal", "Normal"];

const Step2 = ({ formValue, setFormValue, setStep }) => {
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
        Choose type of reader card
      </Typography>
      <div className="flex flex-col gap-2">
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 14,
            fontWeight: 500,
            color: "#333333",
          }}
        >
          Type of reader card
        </Typography>{" "}
        <MySelect
          value={formValue.type_card}
          onChange={(e) =>
            setFormValue((prev) => ({ ...prev, type_card: e.target.value }))
          }
          optionList={cardOption}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-4">
          <img alt="" src={IconQuestion} className="w-[20px] h-[20px]" />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: 400,
              color: "#121115",
            }}
          >
            Card #1: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry <br />
            Card #2: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry
          </Typography>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img alt="" src={IconQuestion} className="w-[20px] h-[20px]" />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: 400,
              color: "#121115",
            }}
          >
            Your account is valid for 6 months.
          </Typography>
        </div>
      </div>
      <Button
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: 16,
          borderRadius: 90,
          width: "100%",
        }}
        disabled={!formValue.type_card}
        variant="primary filled"
        onClick={() => setStep(3)}
      >
        Next
        <SvgIcon
          sx={{ width: 20, height: 20 }}
          inheritViewBox={true}
          component={IconArrowRight}
        />
      </Button>
    </div>
  );
};

export default Step2;
