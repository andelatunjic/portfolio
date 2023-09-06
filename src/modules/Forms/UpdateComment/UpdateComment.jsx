import React, { useState, useEffect } from "react";
import FormCustomTheme from "../../../components/FormCustomTheme/FormCustomTheme";
import { useTranslation } from "react-i18next";
import { Button } from "../../../utils/generalStyles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { ButtonWrapper } from "../LogInForm/LoginFormStyle";
import Toast from "../../../components/Toast/Toast";
import { updateComment, getComment } from "../../../firebase/comment";

const UpdateComment = ({ show, showHandler, refreshData, id }) => {
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const hour = String(currentDate.getHours()).padStart(2, "0");
    const minute = String(currentDate.getMinutes()).padStart(2, "0");
    const second = String(currentDate.getSeconds()).padStart(2, "0");

    return `${day}.${month}.${year}. ${hour}:${minute}:${second}`;
  }

  useEffect(() => {
    if (id) {
      getComment(id)
        .then((existingComment) => {
          if (existingComment) {
            setName(existingComment.name);
            setDate(existingComment.date);
            setContent(existingComment.content);
          }
        })
        .catch((error) => {
          console.error("Greška prilikom dohvaćanja komentara", error);
        });
    }
  }, []);

  const currentComment = {
    name: name,
    date: date,
    content: content,
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "content") {
      setContent(value);
    }
    setDate(getCurrentDate());
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage("Uspješno ažurirano.");
    setErrorMessage("Greška kod ažuriranja. Pokušajte ponovno.");

    await updateComment(currentComment, id)
      .then((res) => {
        showHandler();
        refreshData();
        setSuccessToast(true);
      })
      .catch(() => {
        setErrorToast(true);
      });
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
          <DialogTitle>{t("UpdateCommentTitle")}</DialogTitle>
          <DialogContent>
            <DialogContentText>{t("UpdateCommentSubtitle")}</DialogContentText>
            <form onSubmit={updateHandler}>
              <TextField
                label={t("UpdateCommentNameLabel")}
                name="name"
                value={name}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                required
                variant="standard"
                type="text"
                inputProps={{ maxLength: 50 }}
                autoComplete="off"
              />
              <TextField
                label={t("UpdateCommentContentLabel")}
                name="content"
                value={content}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                required
                variant="standard"
                type="text"
                inputProps={{ maxLength: 500 }}
                autoComplete="off"
                multiline
                rows={3}
              />
              <ButtonWrapper>
                <Button type="submit">{t("UpdateButton")}</Button>
              </ButtonWrapper>
            </form>
          </DialogContent>
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

export default UpdateComment;
