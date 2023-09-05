import React, { useContext, useEffect, useState } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import { observer } from "mobx-react-lite";
import dataStore from "../../store/DataStore";
import { useTranslation } from "react-i18next";
import Section from "../../components/Section/Section";
import {
  ProjectsWrapper,
  Actions,
  Title,
  RightSide,
  AddNew,
} from "./ProjectsStyle";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Grid } from "../../utils/generalStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { getAllProjects } from "../../firebase/project";
import CreateUpdateProject from "../Forms/CreateUpdateProject/CreateUpdateProject";
import Tooltip from "@mui/material/Tooltip";

const Projects = () => {
  const { t } = useTranslation();
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
    await getAllProjects()
      .then((res) => {
        setProjects(res);
      })
      .catch(() => {
        console.log("Failed to fetch projects:");
      });
  };

  const newProjectHandler = () => {
    setProjectForm(!projectForm);
  };

  return (
    <Section>
      <ProjectsWrapper>
        <Actions>
          <RightSide>
            <Title>{t("ProjectsTitle")}</Title>
            <Tooltip title={t("CreateProjectTitle")}>
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
            </Tooltip>
          </RightSide>
          <SearchBar placeholder={t("ProjectsSearch")} />
        </Actions>
        <Grid>
          {projects.length === 0 ? (
            <div>{t("ProjectsNoData")}</div>
          ) : (
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                imgSrc={project.imgUrl}
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
