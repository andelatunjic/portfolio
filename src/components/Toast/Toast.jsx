import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Toast = ({
  errorHandler,
  errorToast,
  successToast,
  succesHandler,
  successMessage,
  errorMessage,
}) => {
  return (
    <>
      <Snackbar
        open={errorToast}
        autoHideDuration={3000}
        onClose={errorHandler}
      >
        <MuiAlert
          onClose={errorHandler}
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
          elevation={3}
        >
          {errorMessage}
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={successToast}
        autoHideDuration={3000}
        onClose={succesHandler}
      >
        <MuiAlert
          onClose={succesHandler}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
          elevation={3}
        >
          {successMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Toast;
