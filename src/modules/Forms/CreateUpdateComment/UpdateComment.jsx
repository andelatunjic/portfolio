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
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

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
          console.error("Greška prilikom dohvaćanja komentara:", error);
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
    } else if (name === "date") {
      setDate(value);
    } else if (name === "content") {
      setContent(value);
    }
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
          <DialogTitle>Edit comment</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit existing comment.</DialogContentText>
            <form onSubmit={updateHandler}>
              <TextField
                label="Name"
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
                label="Date"
                name="date"
                value={date}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                required
                variant="standard"
                type="date"
                inputProps={{ maxLength: 10, pattern: "dd/MM/yyyy" }}
                autoComplete="off"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Content"
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
                <Button type="submit">Update</Button>
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
