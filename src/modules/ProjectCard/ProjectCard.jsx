import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import Tag from "../../components/Tag/Tag";
import Open from "@mui/icons-material/OpenInNewSharp";
import GitHub from "@mui/icons-material/GitHub";
import Delete from "@mui/icons-material/DeleteOutline";
import Edit from "@mui/icons-material/EditTwoTone";
import {
  ProjectCardWrapper,
  ProjectFigure,
  ProjectImage,
  ProjectTitle,
  ProjectDate,
  ProjectDescription,
  Actions,
  Tags,
  AdminActions,
} from "./ProjectCardStyle";
import CreateUpdateProject from "../Forms/CreateUpdateProject/CreateUpdateProject";
import DeleteProject from "../../components/DeleteProject/DeleteProject";
import Tooltip from "@mui/material/Tooltip";
import { format } from 'date-fns';

const ProjectCard = ({
  id,
  imgSrc,
  title,
  description,
  date,
  tags,
  gitHubUrl,
  demoUrl,
  refreshData,
}) => {
  const { darkMode, authUser } = useContext(OptionsContext);
  const tagArray = tags.split(",");

  const { t } = useTranslation();

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [projectForm, setProjectForm] = useState(false);

  const deleteDialogHandler = () => {
    setDeleteDialog(!deleteDialog);
  };

  const updateProjectHandler = () => {
    setProjectForm(!projectForm);
  };

  const formatDate = (date) => {
    return format(new Date(date), 'dd.MM.yyyy.');
  };

  return (
    <>
      <ProjectCardWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDate>{formatDate(date)}</ProjectDate>
        <ProjectFigure>
          <ProjectImage src={imgSrc} alt="Project screenshot" />
        </ProjectFigure>
        <ProjectDescription>{description}</ProjectDescription>
        <Tags>
          {tagArray.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </Tags>
        <Actions>
          <AdminActions auth={authUser}>
            <Tooltip title={t("DeleteProjectTitle")}>
              <Delete
                onClick={deleteDialogHandler}
                sx={{
                  color: darkMode ? "#F9FAFB" : "#1F2937",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5c6bc0",
                    transition: "0.3s ease-out",
                  },
                }}
              />
            </Tooltip>
            <Tooltip title={t("UpdateProjectTitle")}>
              <Edit
                onClick={updateProjectHandler}
                sx={{
                  color: darkMode ? "#F9FAFB" : "#1F2937",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5c6bc0",
                    transition: "0.3s ease-out",
                  },
                }}
              />
            </Tooltip>
          </AdminActions>
          <Tooltip title={t("ProjectsSeeRepository")}>
            <a target="_blank" href={gitHubUrl}>
              <GitHub
                sx={{
                  color: darkMode ? "#F9FAFB" : "#1F2937",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5c6bc0",
                    transition: "0.3s ease-out",
                  },
                }}
              />
            </a>
          </Tooltip>
          <Tooltip title={t("ProjectsSeeDemo")}>
            <a target="_blank" href={demoUrl}>
              <Open
                sx={{
                  color: darkMode ? "#F9FAFB" : "#1F2937",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5c6bc0",
                    transition: "0.3s ease-out",
                  },
                }}
              />
            </a>
          </Tooltip>
        </Actions>
      </ProjectCardWrapper>
      <DeleteProject
        show={deleteDialog}
        showHandler={deleteDialogHandler}
        refreshData={refreshData}
        id={id}
      />
      <CreateUpdateProject
        show={projectForm}
        showHandler={updateProjectHandler}
        refreshData={refreshData}
        update
        id={id}
      />
    </>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.string,
};

export default ProjectCard;
