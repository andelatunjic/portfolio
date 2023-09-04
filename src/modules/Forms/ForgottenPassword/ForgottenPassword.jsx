import React, { useState } from "react";
import FormCustomTheme from "../../../components/FormCustomTheme/FormCustomTheme";
import { useTranslation } from "react-i18next";
import { Button, OutlineButton } from "../../../utils/generalStyles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { ButtonWrapper } from "../LogInForm/LoginFormStyle";
import { auth } from "../../../firebase/firebase";
import Toast from "../../../components/Toast/Toast";

const ForgottenPassword = ({ show, showHandler }) => {
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const [email, setEmail] = useState("");

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSuccessMessage(t("SnackBarSuccessfulEmailReset"));
    setErrorMessage(t("SnackBarFailedEmailReset"));
    
    try {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          setEmail("");
          showHandler();
          setSuccessToast(true);
        })
        .catch((err) => {
          setErrorToast(true);
        });
      setSending(false);
    } catch (err) {
      setErrorToast(true);
    }
  };

  const errorHandler = () => {
    setErrorToast(false);
  };

  const succesHandler = () => {
    setSuccessToast(false);
  };

  return (
    <>
      <FormCustomTheme>
        <Dialog open={show} onClose={showHandler}>
          <DialogTitle>{t("ForgottenPassTitle")}</DialogTitle>
          <DialogContent>
            <DialogContentText>{t("ForgottenPassSubtitle")}</DialogContentText>
            <TextField
              autoFocus
              label="Email"
              name="email"
              value={email}
              onChange={inputChangeHandler}
              fullWidth
              margin="dense"
              required
              variant="standard"
              type="email"
              inputProps={{ maxLength: 80 }}
              autoComplete="off"
            />
          </DialogContent>
          <DialogActions>
            <ButtonWrapper>
              <OutlineButton onClick={showHandler}>
                {t("ForgottenPassCancel")}
              </OutlineButton>
              <Button onClick={submitHandler}>
                {t("ForgottenPassSubmit")}
              </Button>
            </ButtonWrapper>
          </DialogActions>
        </Dialog>
      </FormCustomTheme>
      <Toast
        errorHandler={errorHandler}
        errorToast={errorToast}
        successToast={successToast}
        succesHandler={succesHandler}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default ForgottenPassword;
