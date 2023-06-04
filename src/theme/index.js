import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  fontFamily: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#fbb326",
      50: "#fff2db",
      100: "#fedea5",
      200: "#fdc969",
      300: "#fbb326",
      400: "#f9a300",
    },
    secondary: {
      main: "#056838",
      50: "#e7f7ed",
      100: "#c5ead3",
      200: "#9fddb8",
      300: "#76d19b",
      400: "#55c686",
    },
    text_neutral: {
      main: "#4A4553",
      white: "#fff",
    },
    battery: {
      100: "#25cc40",
      50: "#9fdf54",
      25: "#f4f458",
      0: "#ec3e3f",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          width: "100%",
          borderStyle: "solid",
          borderWidth: "3px",
          borderColor: "transparent",
        },
      },
      variants: [
        {
          props: { variant: "primary filled" },
          style: {
            color: "#FFFFFF",
            background: "#fbb326",
            ":hover": {
              background: "#f9a300",
            },
            ":focus": {
              background: "#f9a300",
              borderColor: "#fff2db",
            },
            ":disabled": {
              color: "#ffffff",
              background: "#9D9AA4",
            },
          },
        },
        {
          props: { variant: "primary link" },
          style: {
            color: "#FFAB00",
            background: "transparent",
            ":hover": {
              color: "#CC8900",
            },
            ":focus": {
              color: "#CC8900",
            },
            ":disabled": {
              color: "#ffffff",
              background: "#9D9AA4",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            width: 97,
            height: 32,
            fontSize: 12,
            fontWeight: 600,
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: 137,
            height: 44,
            fontSize: 14,
            fontWeight: 700,
          },
        },
        {
          props: { size: "large" },
          style: {
            width: 168,
            height: 54,
            fontSize: 16,
            fontWeight: 700,
          },
        },
      ],
    },
  },
});

export default theme;
