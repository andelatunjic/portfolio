import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import {
  CardInner,
  CardDescription,
  CardTitle,
  CardWrapper,
  CardContent,
  CardSubtitle,
  AdminOptions,
} from "./TimelineCardStyle";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/EditTwoTone";
import DeleteExperience from "../DeleteExperience/DeleteExperience";
import CreateUpdateExperience from "../../modules/Forms/CreateUpdateExperience/CreateUpdateExperience";

const TimelineCard = ({ id, position, company, description, refreshData }) => {
  const { darkMode, authUser } = useContext(OptionsContext);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [experienceForm, setExperienceForm] = useState(false);

  const deleteDialogHandler = () => {
    setDeleteDialog(!deleteDialog);
  };

  const updateExperienceHandler = () => {
    setExperienceForm(!experienceForm);
  };

  return (
    <>
      <CardWrapper>
        <AdminOptions auth={authUser}>
          <IconButton
            onClick={deleteDialogHandler}
            sx={{
              backgroundColor: "rgba(1, 1, 1, 0.2)",
              "&:hover": {
                backgroundColor: "rgba(1, 1, 1, 0.3)",
              },
              color: "#FF6668",
            }}
          >
            <Delete
              sx={{ color: darkMode ? "#F9FAFB" : "#1F2937" }}
              fontSize="small"
            />
          </IconButton>
          <IconButton
            onClick={updateExperienceHandler}
            sx={{
              backgroundColor: "rgba(1, 1, 1, 0.2)",
              "&:hover": {
                backgroundColor: "rgba(1, 1, 1, 0.3)",
              },
              color: "#FF6668",
            }}
          >
            <Edit
              sx={{ color: darkMode ? "#F9FAFB" : "#1F2937" }}
              fontSize="small"
            />
          </IconButton>
        </AdminOptions>
        <CardContent>
          <CardInner>
            <CardTitle>{position}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardDescription>{description}</CardDescription>
          </CardInner>
        </CardContent>
      </CardWrapper>
      <DeleteExperience
        show={deleteDialog}
        showHandler={deleteDialogHandler}
        refreshData={refreshData}
        id={id}
      />
      <CreateUpdateExperience
        show={experienceForm}
        showHandler={updateExperienceHandler}
        refreshData={refreshData}
        update
        id={id}
      />
    </>
  );
};

export default TimelineCard;
