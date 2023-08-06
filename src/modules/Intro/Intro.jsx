import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import { Button, OutlineButton } from "../../utils/generalStyles";
import Section from "../../components/Section/Section";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import {
  IntroWrapper,
  TextContent,
  Title,
  Subtitle,
  Image,
  Buttons,
  ImageWrapper,
} from "./IntroStyle";

const Intro = ({ illustration, clickHandler }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <Section>
      <IntroWrapper>
        <TextContent>
          <Title>Front-End React Developer</Title>
          <Subtitle>
            Hello, I'm Anđela Tunjić, a front-end React developer from Varaždin,
            Croatia.
          </Subtitle>
          <Buttons>
            <Button onClick={clickHandler} dark={darkMode ? "true" : "false"}>
              About Me
            </Button>
            <OutlineButton dark={darkMode ? "true" : "false"}>
              Contact Me
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
