import React, { useContext, useEffect, useState } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import { observer } from "mobx-react-lite";
import dataStore from "../../store/DataStore";
import Section from "../../components/Section/Section";
import {
  ProjectsWrapper,
  Actions,
  Title,
  RightSide,
  AddNew,
} from "./ProjectsStyle";
import ProjectCard from "../ProjectCard/ProjectCard";
import ufo from "../../assets/images/ufo.png";
import { Grid } from "../../utils/generalStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { getAllProjects } from "../../firebase/project";
import CreateUpdateProject from "../Forms/CreateUpdateProject/CreateUpdateProject";

const Projects = () => {
  const { darkMode, authUser } = useContext(OptionsContext);

  const { projects, setProjects, projectsLength } = dataStore;

  const [projectForm, setProjectForm] = useState(false);

  useEffect(() => {
    fetchProjects();

    if (projectsLength === 0) {
      fetchProjects();
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const projectData = await getAllProjects();
      setProjects(projectData);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const newProjectHandler = () => {
    setProjectForm(!projectForm);
  };

  return (
    <Section>
      <ProjectsWrapper>
        <Actions>
          <RightSide>
            <Title>My Projects</Title>
            <AddNew auth={authUser}>
              <IconButton
                onClick={newProjectHandler}
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
          {projects.length === 0 ? (
            <div>No projects to show.</div>
          ) : (
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                imgSrc={project.imgUrl}
                imgAlt="Project screenshot"
                title={project.name}
                description={project.description}
                date={project.date}
                tags={project.tags}
                gitHubUrl={project.gitHubUrl}
                demoUrl={project.demoUrl}
                refreshData={fetchProjects}
              />
            ))
          )}
        </Grid>
      </ProjectsWrapper>
      <CreateUpdateProject
        show={projectForm}
        showHandler={newProjectHandler}
        refreshData={fetchProjects}
      />
    </Section>
  );
};

export default observer(Projects);
