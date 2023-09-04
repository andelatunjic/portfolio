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
  createExperience,
  updateExperience,
  getExperience,
} from "../../../firebase/experience";

const CreateUpdateExperience = ({
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

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (update && id) {
      getExperience(id)
        .then((existingExperience) => {
          if (existingExperience) {
            setDateFrom(existingExperience.dateFrom);
            setDateTo(existingExperience.dateTo);
            setPosition(existingExperience.position);
            setCompany(existingExperience.company);
            setDescription(existingExperience.description);
          }
        })
        .catch((error) => {
          console.error("Greška prilikom dohvaćanja iskustva:", error);
        });
    }
  }, []);

  const newExperience = {
    dateFrom: dateFrom,
    dateTo: dateTo,
    position: position,
    company: company,
    description: description,
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "dateFrom") {
      setDateFrom(value);
    } else if (name === "dateTo") {
      setDateTo(value);
    } else if (name === "position") {
      setPosition(value);
    } else if (name === "company") {
      setCompany(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage("Uspješno kreirano");
    setErrorMessage(
      "Greška kod kreiranja. Možda je datum od veći od datuma do."
    );

    if (dateFrom > dateTo) {
      setErrorToast(true);
    } else {
      await createExperience(newExperience)
        .then((res) => {
          setDateFrom("");
          setDateTo("");
          setPosition("");
          setCompany("");
          setDescription("");
          showHandler();
          refreshData();
          setSuccessToast(true);
        })
        .catch(() => {
          setErrorToast(true);
        });
    }
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage("Uspješno ažurirano.");
    setErrorMessage("Greška kod ažuriranja. Pokušajte ponovno.");

    await updateExperience(newExperience, id)
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
            {update ? "Edit experience" : "Add new experience"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {update
                ? "Edit existing experience data."
                : "To add new experience, please fill all the data here."}
            </DialogContentText>
            <form onSubmit={update ? updateHandler : submitHandler}>
              <TextField
                label="Date from"
                name="dateFrom"
                value={dateFrom}
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
                label="Date to"
                name="dateTo"
                value={dateTo}
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
                label="Position"
                name="position"
                value={position}
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
                label="Company"
                name="company"
                value={company}
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
                label="Description"
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
                <Button type="submit">{update ? "Update" : "Create"}</Button>
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

export default CreateUpdateExperience;
