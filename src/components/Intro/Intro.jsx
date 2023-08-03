import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import { Button, OutlineButton } from "../../utils/generalStyles";
import CV from "../../assets/files/CV.pdf";
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
    <IntroWrapper>
      <TextContent>
        <Title>Front-End React Developer</Title>
        <Subtitle>
          Hello, I'm Anđela Tunjić, a front-end React developer from Varaždin,
          Croatia.
        </Subtitle>
        <Buttons>
          <Button onClick={clickHandler}>About Me</Button>
          <a
            href={CV}
            download="CV - Anđela Tunjić"
            target="_blank"
            rel="noreferrer"
          >
            <OutlineButton dark={darkMode ? "true" : "false"}>
              Download CV
            </OutlineButton>
          </a>
        </Buttons>
      </TextContent>
      <ImageWrapper>
        <Image src={illustration} alt="Design illustration" />
      </ImageWrapper>
    </IntroWrapper>
  );
};

Intro.propTypes = {
  illustration: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Intro;
