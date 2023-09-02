import React from "react";
import Section from "../../components/Section/Section";
import { ProjectsWrapper } from "./ProjectsStyle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ufo from "../../assets/images/ufo.png";
import { Grid } from "../../utils/generalStyles";

const Projects = () => {
  return (
    <Section>
      <ProjectsWrapper>
        <Grid>
          <ProjectCard
            imgSrc={ufo}
            imgAlt="test"
            title="Portfolio"
            description="This is a project made as a part of bla bla. Also, this is bla bla."
            date="21.05.2021."
          />
          <ProjectCard
            imgSrc={ufo}
            imgAlt="test"
            title="Portfolio"
            description="This is a project made as a part of bla bla. Also, this is bla bla."
            date="21.05.2021."
          />
          <ProjectCard
            imgSrc={ufo}
            imgAlt="test"
            title="Portfolio"
            description="This is a project made as a part of bla bla. Also, this is bla bla."
            date="21.05.2021."
          />
          <ProjectCard
            imgSrc={ufo}
            imgAlt="test"
            title="Portfolio"
            description="This is a project made as a part of bla bla. Also, this is bla bla."
            date="21.05.2021."
          />
        </Grid>
      </ProjectsWrapper>
    </Section>
  );
};

export default Projects;
