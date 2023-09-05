import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { OutlineButton, Button } from "../../utils/generalStyles";
import { ButtonWrapper } from "../../modules/Forms/LogInForm/LoginFormStyle";
import Toast from "../Toast/Toast";
import { deleteProject } from "../../firebase/project";

const DeleteProject = ({ show, showHandler, refreshData, id }) => {
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage(t("SnackBarSuccessfulDelete"));
    setErrorMessage(t("SnackBarFailedDelete"));

    await deleteProject(id)
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
        <DialogTitle>{t("DeleteProjectTitle")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t("DeleteProjectSubtitle")}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonWrapper>
            <OutlineButton onClick={showHandler}>
              {t("CancelButton")}
            </OutlineButton>
            <Button onClick={submitHandler}>{t("DeleteButton")}</Button>
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
