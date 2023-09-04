import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { OutlineButton, Button } from "../../utils/generalStyles";
import { ButtonWrapper } from "../../modules/Forms/LogInForm/LoginFormStyle";
import Toast from "../Toast/Toast";
import { deleteComment } from "../../firebase/comment";

const DeleteProject = ({ show, showHandler, refreshData, id }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage("Uspješno obrisano");
    setErrorMessage("Greška prilikom brisanja. Pokušajte ponovno.");

    await deleteComment(id)
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
      <Dialog open={show} onClose={showHandler}>
        <DialogTitle>Delete comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this comment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonWrapper>
            <OutlineButton onClick={showHandler}>Cancel</OutlineButton>
            <Button onClick={submitHandler}>Delete</Button>
          </ButtonWrapper>
        </DialogActions>
      </Dialog>
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

export default DeleteProject;
