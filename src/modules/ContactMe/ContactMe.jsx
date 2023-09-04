import React, { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import { Button, Subtitle, Title } from "../../utils/generalStyles";
import Section from "../../components/Section/Section";
import {
  ContactWrapper,
  TextWrapper,
  ButtonWrapper,
  Form,
} from "./ContactMeStyle";
import Toast from "../../components/Toast/Toast";

const ContactMe = ({ reference }) => {
  const { darkMode } = useContext(OptionsContext);
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
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
    setSuccessMessage(t("SnackBarSuccessfulContact"));
    setErrorMessage(t("SnackBarFailedContact"));

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
          <Title>{t("contactMeTitle")}</Title>
          <Subtitle moreContrast>{t("contactMeSubtitle")}</Subtitle>
        </TextWrapper>
        <Form ref={form} onSubmit={submitHandler}>
          <CustomTheme>
            <TextField
              label={t("contactMeSubject")}
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
              label={t("contactMeName")}
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
              label={t("contactMeEmail")}
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
              label={t("contactMeMessage")}
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
          </CustomTheme>
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
            label={t("contactMeRobot")}
            sx={{
              color: darkMode ? "#a4a9b0" : "#1F2937",
            }}
          />
          <ButtonWrapper>
            <Button
              fullWidth
              dark={darkMode ? "true" : "false"}
              type="submit"
              disabled={sending}
            >
              {t("contactMeSend")}
            </Button>
          </ButtonWrapper>
        </Form>
      </ContactWrapper>
      <Toast
        errorHandler={errorHandler}
        errorToast={errorToast}
        successToast={successToast}
        succesHandler={succesHandler}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </Section>
  );
};

export default ContactMe;
