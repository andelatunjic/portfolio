import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import {
  IntroWrapper,
  TextContent,
  Title,
  Subtitle,
  Image,
} from "./IntroStyle";

const Intro = ({ illustration }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <IntroWrapper>
      <TextContent>
        <Title>Front-End React Developer</Title>
        <Subtitle>
          Hello, I'm Anđela Tunjić, a front-end React developer from Varaždin,
          Croatia.
        </Subtitle>
      </TextContent>
      <Image src={illustration} alt="Design illustration" />
    </IntroWrapper>
  );
};

Intro.propTypes = {
  illustration: PropTypes.string,
};

export default Intro;
