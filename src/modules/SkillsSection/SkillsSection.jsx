import React from "react";
import Section from "../../components/Section/Section";
import { Grid } from "../../utils/generalStyles";
import {
  Progress,
  SkillsWrapper,
  Title,
  SkillCardWrapper,
  Category,
  Items,
  ItemWrapper,
  Content,
} from "./SkillsSectionStyle";

const SkillsSection = () => {
  return (
    <Section>
      <SkillsWrapper>
        <Title>My Skills</Title>
        <Grid skills>
          <SkillCardWrapper>
            <Category>Front-End Development</Category>
            <Items>
              <ItemWrapper>
                <Content>HTML, CSS, JavaScript</Content>
                <Progress value={80} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>React, SASS, Styled Components</Content>
                <Progress value={70} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>Angular, TypeScript</Content>
                <Progress value={20} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>MaterialUI, DevExtreme</Content>
                <Progress value={50} variant="determinate" />
              </ItemWrapper>
            </Items>
          </SkillCardWrapper>
          <SkillCardWrapper>
            <Category>Back-End Development</Category>
            <Items>
              <ItemWrapper>
                <Content>Java, C#</Content>
                <Progress value={70} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>.NET Framework .NET Core, Swagger</Content>
                <Progress value={70} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>PHP</Content>
                <Progress value={20} variant="determinate" />
              </ItemWrapper>
            </Items>
          </SkillCardWrapper>
          <SkillCardWrapper>
            <Category>Database Management</Category>
            <Items>
              <ItemWrapper>
                <Content>MySQL, MSS</Content>
                <Progress value={70} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>PHPMyAdmin, SQLite</Content>
                <Progress value={50} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>Firebase Firestore</Content>
                <Progress value={50} variant="determinate" />
              </ItemWrapper>
            </Items>
          </SkillCardWrapper>
          <SkillCardWrapper>
            <Category>Development & Colaboration Tools</Category>
            <Items>
              <ItemWrapper>
                <Content>Git, GitHub, GitLab</Content>
                <Progress value={50} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>Jira, Confluence, Microsoft Azure</Content>
                <Progress value={50} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>Webex, Slack, Microsoft Teams</Content>
                <Progress value={80} variant="determinate" />
              </ItemWrapper>
            </Items>
          </SkillCardWrapper>
          <SkillCardWrapper>
            <Category>Mobile App Development</Category>
            <Items>
              <ItemWrapper>
                <Content>Flutter, Dart</Content>
                <Progress value={20} variant="determinate" />
              </ItemWrapper>
            </Items>
          </SkillCardWrapper>
          <SkillCardWrapper>
            <Category>Other</Category>
            <Items>
              <ItemWrapper>
                <Content>Communication, Teamwork</Content>
                <Progress value={80} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>Agile Methodologies</Content>
                <Progress value={70} variant="determinate" />
              </ItemWrapper>
              <ItemWrapper>
                <Content>Soft Skills</Content>
                <Progress value={60} variant="determinate" />
              </ItemWrapper>
            </Items>
          </SkillCardWrapper>
        </Grid>
      </SkillsWrapper>
    </Section>
  );
};

export default SkillsSection;
