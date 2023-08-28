import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OptionsContext } from "../../context/OptionsContext";
import Section from "../../components/Section/Section";
import { LoginFormWrapper, Form, ButtonWrapper } from "./LoginFormStyle";
import { Title, Button } from "../../utils/generalStyles";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { auth } from "../../firebase/firebase";

const LoginForm = () => {
  const { darkMode, setAuthUser } = useContext(OptionsContext);
  const navigate = useNavigate();

  const [errorToast, setErrorToast] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sending, setSending] = useState(false);

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

  return (
    <Section>
      <LoginFormWrapper>
        <Title>Welcome back</Title>
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
              <TextField
                label="Password"
                name="password"
                value={password}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                required
                variant="standard"
                disabled={sending}
                type="password"
                inputProps={{ maxLength: 50 }}
                autoComplete="off"
              />
            </CustomTheme>
            <ButtonWrapper>
              <Button
                fullWidth
                dark={darkMode ? "true" : "false"}
                type="submit"
                disabled={sending}
              >
                Login
              </Button>
            </ButtonWrapper>
          </Form>
        </CustomTheme>
      </LoginFormWrapper>
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
          Wrong email or password. Try again.
        </MuiAlert>
      </Snackbar>
    </Section>
  );
};

export default LoginForm;
