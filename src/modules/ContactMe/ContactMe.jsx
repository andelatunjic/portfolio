import React, { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Button, Subtitle, Title } from "../../utils/generalStyles";
import Section from "../../components/Section/Section";
import {
  ContactWrapper,
  TextWrapper,
  ButtonWrapper,
  Form,
} from "./ContactMeStyle";

const ContactMe = ({ reference }) => {
  const { darkMode } = useContext(OptionsContext);

  const textFieldTheme = useTheme();

  const [errorToast, setErrorToast] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [sending, setSending] = useState(false);

  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "subject") {
      setSubject(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const robotHandler = (e) => {
    setIsChecked(e.target.checked);
    setIsFormValid(
      e.target.checked &&
        subject !== "" &&
        name !== "" &&
        email !== "" &&
        message !== ""
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSending(true);
      emailjs
        .sendForm(
          "service_j2skh7p",
          "template_pi7o86q",
          form.current,
          "k75aTmuUPLjBPuG82"
        )
        .then(() => {
          setSubject("");
          setName("");
          setEmail("");
          setMessage("");
          setIsChecked(false);
          setSending(false);
          setSuccessToast(true);
        })
        .catch(() => {
          setSending(false);
          setErrorToast(true);
        });
    } else {
      setErrorToast(true);
    }
  };

  const succesHandler = () => {
    setSuccessToast(false);
  };

  const errorHandler = () => {
    setErrorToast(false);
  };

  return (
    <Section>
      <ContactWrapper ref={reference}>
        <TextWrapper>
          <Title>Let's talk</Title>
          <Subtitle moreContrast>Ask me anything or just say hi!</Subtitle>
        </TextWrapper>
        <Form ref={form} onSubmit={submitHandler}>
          <ThemeProvider theme={customTheme(textFieldTheme)}>
            <TextField
              label="Subject"
              name="subject"
              value={subject}
              onChange={inputChangeHandler}
              fullWidth
              margin="dense"
              required
              variant="standard"
              disabled={sending}
              type="text"
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={inputChangeHandler}
              fullWidth
              margin="dense"
              required
              variant="standard"
              disabled={sending}
              type="text"
              inputProps={{ maxLength: 35 }}
            />
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
              label="Message"
              name="message"
              value={message}
              onChange={inputChangeHandler}
              fullWidth
              margin="dense"
              required
              multiline
              rows={6}
              variant="standard"
              disabled={sending}
              type="text"
              inputProps={{ maxLength: 3000 }}
            />
          </ThemeProvider>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={robotHandler}
                name="checkbox"
                disabled={sending}
                sx={{
                  color: darkMode ? "#FFD087" : "#5c6bc0",
                  "&.Mui-checked": {
                    color: darkMode ? "#FFD087" : "#5c6bc0",
                  },
                }}
              />
            }
            label="I am not a robot"
            sx={{
              color: darkMode ? "#a4a9b0" : "#1F2937",
            }}
          />
          <ButtonWrapper>
            <Button fullWidth
              dark={darkMode ? "true" : "false"}
              type="submit"
              disabled={sending}
            >
              Send
            </Button>
          </ButtonWrapper>
        </Form>
      </ContactWrapper>
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
          Your email is successfully sent!
        </MuiAlert>
      </Snackbar>
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
          Something is wrong. Try again.
        </MuiAlert>
      </Snackbar>
    </Section>
  );
};

export default ContactMe;
