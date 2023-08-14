import React, { useState, useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import Section from "../../components/Section/Section";
import { LoginFormWrapper, Form, ButtonWrapper } from "./LoginFormStyle";
import { Title, Button } from "../../utils/generalStyles";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import TextField from "@mui/material/TextField";

const LoginForm = () => {
  const { darkMode } = useContext(OptionsContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sending, setSending] = useState(false);

  const loginHandler = () => {};

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
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
    </Section>
  );
};

export default LoginForm;
