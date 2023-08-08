import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import MoonDark from "../../assets/images/moonDark.png";
import MoonLight from "../../assets/images/moonLight.png";
import CV from "../../assets/files/CV.pdf";
import { OutlineButton, Title, Subtitle, Text } from "../../utils/generalStyles";
import Section from "../../components/Section/Section";
import {
  AboutMeWrapper,
  Illustration,
  Main,
} from "./AboutMeStyle";

const AboutMe = ({ reference }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <Section background="secondary">
      <AboutMeWrapper ref={reference}>
        <Illustration src={darkMode ? MoonDark : MoonLight}></Illustration>
        <Main>
          <Title>About Me</Title>
          <Subtitle dark={darkMode}>
            Hi there! I'm Anđela, a React Frontend Developer with a keen eye for
            clean and efficient code.
          </Subtitle>
          <Text>
            I enjoy exploring new technologies and continuously improving my
            skills. <br /> I love turning complex problems into elegant solutions
            through the power of web development. <br /> My focus is on crafting
            seamless user experiences and diving into the world of UI/UX. (Let's
            build something extraordinary together! --- za contact me)
          </Text>
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
        </Main>
      </AboutMeWrapper>
    </Section>
  );
};

export default AboutMe;
