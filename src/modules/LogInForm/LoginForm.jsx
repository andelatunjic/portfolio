import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { OptionsContext } from "../../context/OptionsContext";
import Section from "../../components/Section/Section";
import ForgottenPassword from "../ForgottenPassword/ForgottenPassword";
import {
  LoginFormWrapper,
  Form,
  ButtonWrapper,
  ForgotPasswordWrapper,
  PasswordWrapper,
} from "./LoginFormStyle";
import { Title, Button, Subtitle, Text } from "../../utils/generalStyles";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { auth } from "../../firebase/firebase";

const LoginForm = () => {
  const { darkMode, setAuthUser } = useContext(OptionsContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [errorToast, setErrorToast] = useState(false);
  const [newPassword, setNewPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [sending, setSending] = useState(false);

  let iconColor = darkMode ? "#FFD087" : "#5c6bc0";

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setSending(true);
    try {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          user
            .getIdToken()
            .then((idToken) => {
              localStorage.setItem("userToken", idToken);
              navigate("/");
            })
            .catch((err) => {
              setSending(false);
              setErrorToast(true);
            });
        })
        .catch((err) => {
          setSending(false);
          setErrorToast(true);
        });
      setSending(false);
    } catch (err) {
      setSending(false);
      setErrorToast(true);
    }
  };

  const errorHandler = () => {
    setErrorToast(false);
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const forgottenPasswordHandler = () => {
    setNewPassword(!newPassword);
  };

  return (
    <Section>
      <LoginFormWrapper>
        <Title>{t("LoginTitle")}</Title>
        <Subtitle>{t("LoginSubtitle")}</Subtitle>
        <CustomTheme>
          <Form onSubmit={loginHandler}>
            <CustomTheme>
              <TextField
                label="Email"
                name="email"
                value={email}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                required
                variant="standard"
                disabled={sending}
                type="email"
                inputProps={{ maxLength: 50 }}
                autoComplete="off"
              />
              <PasswordWrapper>
                <TextField
                  label={t("LoginPassword")}
                  name="password"
                  value={password}
                  onChange={inputChangeHandler}
                  fullWidth
                  margin="dense"
                  required
                  variant="standard"
                  disabled={sending}
                  type={showPassword ? "text" : "password"}
                  inputProps={{ maxLength: 50 }}
                  autoComplete="off"
                />
                <IconButton onClick={showPasswordHandler}>
                  {showPassword ? (
                    <Visibility sx={{ color: iconColor }} />
                  ) : (
                    <VisibilityOff sx={{ color: iconColor }} />
                  )}
                </IconButton>
              </PasswordWrapper>
            </CustomTheme>
            <ButtonWrapper>
              <Button
                fullWidth
                dark={darkMode ? "true" : "false"}
                type="submit"
                disabled={sending}
              >
                {t("LoginButton")}
              </Button>
            </ButtonWrapper>
          </Form>
        </CustomTheme>
        <ForgotPasswordWrapper onClick={forgottenPasswordHandler}>
          <Text>{t("LoginForgottenPass")}</Text>
        </ForgotPasswordWrapper>
      </LoginFormWrapper>
      <ForgottenPassword
        show={newPassword}
        showHandler={forgottenPasswordHandler}
      />
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
          {t("SnackBarFailedAuthentication")}
        </MuiAlert>
      </Snackbar>
    </Section>
  );
};

export default LoginForm;
