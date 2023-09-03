import React, { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import Section from "../../components/Section/Section";
import { ProjectsWrapper, Actions, Title, RightSide, AddNew } from "./ProjectsStyle";
import ProjectCard from "../ProjectCard/ProjectCard";
import ufo from "../../assets/images/ufo.png";
import { Grid } from "../../utils/generalStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const Projects = () => {
  const { darkMode, authUser } = useContext(OptionsContext);

  return (
    <Section>
      <ProjectsWrapper>
        <Actions>
          <RightSide>
            <Title>My Projects</Title>
            <AddNew auth={authUser}>
              <IconButton
                sx={{
                  backgroundColor: "rgba(1, 1, 1, 0.2)",
                  "&:hover": {
                    backgroundColor: "rgba(1, 1, 1, 0.3)",
                  },
                  color: "#B3AFF8",
                }}
              >
                <Add
                  sx={{ color: darkMode ? "#F9FAFB" : "#1F2937" }}
                  fontSize="medium"
                />
              </IconButton>
            </AddNew>
          </RightSide>
          <SearchBar placeholder="Search projects..." />
        </Actions>
        <Grid>
          <ProjectCard
            imgSrc={ufo}
            imgAlt="test"
            title="Portfolio"
            description="This is a project made as a part of bla bla. Also, this is bla bla."
            date="21.05.2021."
            tags="react, JS, SASS, HTML"
          />
          <ProjectCard
            imgSrc={ufo}
            imgAlt="test"
            title="Portfolio"
            description="This is a project made as a part of bla bla. Also, this is bla bla."
            date="21.05.2021."
            tags="react, JS, SASS, HTML"
          />
          <ProjectCard
            imgSrc={ufo}
            imgAlt="test"
            title="Portfolio"
            description="This is a project made as a part of bla bla. Also, this is bla bla."
            date="21.05.2021."
            tags="react, JS, SASS, HTML"
          />
          <ProjectCard
            imgSrc={ufo}
            imgAlt="test"
            title="Portfolio"
            description="This is a project made as a part of bla bla. Also, this is bla bla."
            date="21.05.2021."
            tags="react, JS, SASS, HTML"
          />
        </Grid>
      </ProjectsWrapper>
    </Section>
  );
};

export default Projects;
