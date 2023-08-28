import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const PasswordCustomTheme = ({ children }) => {
  const textFieldTheme = useTheme();

  const customTheme = (textFieldTheme) =>
    createTheme({
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              "& label.Mui-focused": {
                color: "#5c6bc0",
              },
              "& label": {
                color: "#1F2937",
              },
              "& label.Mui-disabled": {
                color: "#1F2937",
              },
              "& textarea": {
                color: "#1F2937",
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              "&:before": {
                borderBottom: "2px solid #B3AFF8",
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "2px solid #5c6bc0",
              },
              "&.Mui-focused:after": {
                borderBottom: "2px solid #5c6bc0",
              },
              "& input": {
                color: "#1F2937",
              },
            },
          },
        },
      },
    });

  return (
    <ThemeProvider theme={customTheme(textFieldTheme)}>
      {children}
    </ThemeProvider>
  );
};

PasswordCustomTheme.propTypes = {
  children: PropTypes.node,
};

export default PasswordCustomTheme;
