import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import { Button, OutlineButton, Title, Subtitle } from "../../utils/generalStyles";
import Section from "../../components/Section/Section";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import {
  IntroWrapper,
  TextContent,
  Image,
  Buttons,
  ImageWrapper,
} from "./IntroStyle";

const Intro = ({ illustration, aboutMeHandler, contactMeHandler }) => {
  const { darkMode } = useContext(OptionsContext);
  const { t } = useTranslation();

  return (
    <Section>
      <IntroWrapper>
        <TextContent>
          <Title>{t("introTitle")}</Title>
          <Subtitle>
          {t("introSubtitle")}
          </Subtitle>
          <Buttons>
            <Button onClick={aboutMeHandler} dark={darkMode ? "true" : "false"}>
            {t("introAboutMeButton")}
            </Button>
            <OutlineButton onClick={contactMeHandler} dark={darkMode ? "true" : "false"}>
            {t("introContactMeButton")}
            </OutlineButton>
          </Buttons>
          <SocialMedia />
        </TextContent>
        <ImageWrapper>
          <Image src={illustration} alt="Design illustration" />
        </ImageWrapper>
      </IntroWrapper>
    </Section>
  );
};

Intro.propTypes = {
  illustration: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Intro;
