import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../../components/Section/Section";
import { Grid, SubtitleAlignLeft } from "../../utils/generalStyles";
import Front from "../../assets/images/frontend.png";
import Back from "../../assets/images/backend.png";
import Database from "../../assets/images/database.png";
import Tools from "../../assets/images/tools.png";
import Mobile from "../../assets/images/mobile.png";
import Other from "../../assets/images/other.png";
import {
  Progress,
  SkillsWrapper,
  Title,
  SkillCardWrapper,
  Category,
  Items,
  ItemWrapper,
  Content,
  Figure,
  Image,
  CardHeader,
} from "./SkillsSectionStyle";

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <SkillsWrapper>
        <Title>{t("SkillsTitle")}</Title>
        <SubtitleAlignLeft>{t("SkillsDescription")}</SubtitleAlignLeft>
        <Grid>
          <SkillCardWrapper>
            <CardHeader>
              <Figure>
                <Image src={Front} alt="Design image" />
              </Figure>
              <Category>{t("SkillsFront")}</Category>
            </CardHeader>
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
            <CardHeader>
              <Figure>
                <Image src={Back} alt="Design image" />
              </Figure>
              <Category>{t("SkillsBack")}</Category>
            </CardHeader>
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
            <CardHeader>
              <Figure>
                <Image src={Database} alt="Design image" />
              </Figure>
              <Category>{t("SkillsDatabase")}</Category>
            </CardHeader>
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
            <CardHeader>
              <Figure>
                <Image src={Tools} alt="Design image" />
              </Figure>
              <Category>{t("SkillsTools")}</Category>
            </CardHeader>
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
            <CardHeader>
              <Figure>
                <Image src={Mobile} alt="Design image" />
              </Figure>
              <Category>{t("SkillsMobile")}</Category>
            </CardHeader>
            <Items>
              <ItemWrapper>
                <Content>Flutter, Dart</Content>
                <Progress value={20} variant="determinate" />
              </ItemWrapper>
            </Items>
          </SkillCardWrapper>
          <SkillCardWrapper>
            <CardHeader>
              <Figure>
                <Image src={Other} alt="Design image" />
              </Figure>
              <Category>{t("SkillsOther")}</Category>
            </CardHeader>
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
