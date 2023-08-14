import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation, Trans } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import MoonDark from "../../assets/images/moonDark.png";
import MoonLight from "../../assets/images/moonLight.png";
import CV from "../../assets/files/CV.pdf";
import {
  OutlineButton,
  Title,
  Subtitle,
  Text,
} from "../../utils/generalStyles";
import Section from "../../components/Section/Section";
import { AboutMeWrapper, Illustration, Main } from "./AboutMeStyle";

const AboutMe = ({ reference }) => {
  const { darkMode } = useContext(OptionsContext);
  const { t } = useTranslation();

  return (
    <Section background="secondary">
      <AboutMeWrapper ref={reference}>
        <Illustration src={darkMode ? MoonDark : MoonLight}></Illustration>
        <Main>
          <Title>{t("aboutMeTitle")}</Title>
          <Subtitle dark={darkMode}>{t("aboutMeSubtitle")}</Subtitle>
          <Text>
            <Trans i18nKey="aboutMeContent" />
          </Text>
          <a
            href={CV}
            download="CV - Anđela Tunjić"
            target="_blank"
            rel="noreferrer"
          >
            <OutlineButton dark={darkMode ? "true" : "false"}>
              {t("aboutMeCVButton")}
            </OutlineButton>
          </a>
        </Main>
      </AboutMeWrapper>
    </Section>
  );
};

export default AboutMe;
