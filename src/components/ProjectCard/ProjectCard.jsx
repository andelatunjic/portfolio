import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import Tag from "../Tag/Tag";
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

const ProjectCard = ({ imgSrc, imgAlt, title, description, date, tags }) => {
  const { darkMode, authUser } = useContext(OptionsContext);

  const tagArray = tags.split(",");

  return (
    <ProjectCardWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDate>{date}</ProjectDate>
      <ProjectFigure>
        <ProjectImage src={imgSrc} alt={imgAlt} />
      </ProjectFigure>
      <ProjectDescription>{description}</ProjectDescription>
      <Tags>
        {tagArray.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </Tags>
      <Actions>
        <AdminActions auth={authUser}>
          <Delete
            sx={{
              color: darkMode ? "#F9FAFB" : "#1F2937",
              cursor: "pointer",
              "&:hover": {
                color: "#5c6bc0",
                transition: "0.3s ease-out",
              },
            }}
          />
          <Edit
            sx={{
              color: darkMode ? "#F9FAFB" : "#1F2937",
              cursor: "pointer",
              "&:hover": {
                color: "#5c6bc0",
                transition: "0.3s ease-out",
              },
            }}
          />
        </AdminActions>
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
      </Actions>
    </ProjectCardWrapper>
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
