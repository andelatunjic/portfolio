import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const CustomTheme = ({ children }) => {
  const textFieldTheme = useTheme();
  const { darkMode } = useContext(OptionsContext);

  const customTheme = (textFieldTheme) =>
    createTheme({
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              "& label.Mui-focused": {
                color: darkMode ? "#FFD087" : "#5c6bc0",
              },
              "& label": {
                color: darkMode ? "#a4a9b0" : "#1F2937",
              },
              "& label.Mui-disabled": {
                color: darkMode ? "#a4a9b0" : "#1F2937",
              },
              "& textarea": {
                color: darkMode ? "#FFFFFF" : "#1F2937",
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
                borderBottom: darkMode
                  ? "2px solid #FFD087"
                  : "2px solid #5c6bc0",
              },
              "&.Mui-focused:after": {
                borderBottom: darkMode
                  ? "2px solid #FFD087"
                  : "2px solid #5c6bc0",
              },
              "& input": {
                color: darkMode ? "#FFFFFF" : "#1F2937",
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

CustomTheme.propTypes = {
  children: PropTypes.node,
};

export default CustomTheme;
