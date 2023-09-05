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
import {
  createProject,
  updateProject,
  getProject,
} from "../../../firebase/project";

const CreateUpdateProject = ({
  show,
  showHandler,
  refreshData,
  update,
  id,
}) => {
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [gitHubUrl, setGitHubUrl] = useState("");
  const [demoUrl, setDemoUrl] = useState("");

  useEffect(() => {
    if (update && id) {
      getProject(id)
        .then((existingProject) => {
          if (existingProject) {
            setName(existingProject.name);
            setDate(existingProject.date);
            setImgUrl(existingProject.imgUrl);
            setDescription(existingProject.description);
            setTags(existingProject.tags);
            setGitHubUrl(existingProject.gitHubUrl);
            setDemoUrl(existingProject.demoUrl);
          }
        })
        .catch((error) => {
          console.error("Greška prilikom dohvaćanja projekta", error);
        });
    }
  }, []);

  const newProject = {
    name: name,
    date: date,
    imgUrl: imgUrl,
    description: description,
    tags: tags,
    gitHubUrl: gitHubUrl,
    demoUrl: demoUrl,
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "imgUrl") {
      setImgUrl(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "tags") {
      setTags(value);
    } else if (name === "gitHubUrl") {
      setGitHubUrl(value);
    } else if (name === "demoUrl") {
      setDemoUrl(value);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage(t("SnackBarSuccessfulCreate"));
    setErrorMessage(t("SnackBarFailedCreate"));

    await createProject(newProject)
      .then((res) => {
        setName("");
        setDate("");
        setImgUrl("");
        setDescription("");
        setTags("");
        setGitHubUrl("");
        setDemoUrl("");
        showHandler("");
        refreshData("");
        setSuccessToast(true);
      })
      .catch(() => {
        setErrorToast(true);
      });
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage(t("SnackBarSuccessfulUpdate"));
    setErrorMessage(t("SnackBarFailedUpdate"));

    await updateProject(newProject, id)
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
          <DialogTitle>
            {update ? t("UpdateProjectTitle") : t("CreateProjectTitle")}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {update ? t("UpdateProjectSubtitle") : t("CreateProjectSubtitle")}
            </DialogContentText>
            <form onSubmit={update ? updateHandler : submitHandler}>
              <TextField
                label={t("UpdCreProjectNameLabel")}
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
                label={t("UpdCreProjectDateLabel")}
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
                label={t("UpdCreProjectImageLabel")}
                name="imgUrl"
                value={imgUrl}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                required
                variant="standard"
                type="text"
                inputProps={{ maxLength: 500 }}
                autoComplete="off"
              />
              <TextField
                label={t("UpdCreProjectGitHubLabel")}
                name="gitHubUrl"
                value={gitHubUrl}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                required
                variant="standard"
                type="text"
                inputProps={{ maxLength: 500 }}
                autoComplete="off"
              />
              <TextField
                label={t("UpdCreProjectDemoLabel")}
                name="demoUrl"
                value={demoUrl}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                variant="standard"
                type="text"
                inputProps={{ maxLength: 500 }}
                autoComplete="off"
              />
              <TextField
                label={t("UpdCreProjectTagsLabel")}
                name="tags"
                value={tags}
                onChange={inputChangeHandler}
                fullWidth
                margin="dense"
                required
                variant="standard"
                type="text"
                inputProps={{ maxLength: 100 }}
                autoComplete="off"
              />
              <TextField
                label={t("UpdCreProjectDescriptionLabel")}
                name="description"
                value={description}
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
                <Button type="submit">
                  {update ? t("UpdateButton") : t("CreateButton")}
                </Button>
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

export default CreateUpdateProject;
