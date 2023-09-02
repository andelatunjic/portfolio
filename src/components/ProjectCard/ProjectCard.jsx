import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import {
  ProjectCardWrapper,
  ProjectFigure,
  ProjectImage,
  ProjectTitle,
  ProjectDate,
  ProjectDescription,
  Actions,
} from "./ProjectCardStyle";
import Open from "@mui/icons-material/OpenInNewSharp";
import GitHub from "@mui/icons-material/GitHub";

const ProjectCard = ({ imgSrc, imgAlt, title, description, date }) => {
  const { darkMode, authUser } = useContext(OptionsContext);

  return (
    <ProjectCardWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDate>{date}</ProjectDate>
      <ProjectFigure>
        <ProjectImage src={imgSrc} alt={imgAlt} />
      </ProjectFigure>
      <ProjectDescription>{description}</ProjectDescription>
      <Actions>
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
};

export default ProjectCard;
