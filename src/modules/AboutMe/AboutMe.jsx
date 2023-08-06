import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import MoonDark from "../../assets/images/moonDark.png";
import MoonLight from "../../assets/images/moonLight.png";
import CV from "../../assets/files/CV.pdf";
import { Button, OutlineButton } from "../../utils/generalStyles";
import Section from "../../components/Section/Section";
import {
  AboutMeWrapper,
  Illustration,
  Title,
  Main,
  Intro,
  Description,
  Buttons,
} from "./AboutMeStyle";

const AboutMe = ({ reference }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <Section background="secondary">
      <AboutMeWrapper ref={reference} dark={darkMode}>
        <Illustration src={darkMode ? MoonDark : MoonLight}></Illustration>
        <Main>
          <Title>About Me</Title>
          <Intro>
            Hi there! I'm Anđela, a React Frontend Developer
            with a keen eye for clean and efficient code. 
          </Intro>
          <Description>
            I enjoy exploring new technologies and continuously improving my
            skills. I love turning complex problems into elegant solutions through the power of web
            development. My focus is on crafting seamless user experiences and diving
            into the world of UI/UX. (Let's build something extraordinary
            together! --- za contact me)
          </Description>
          <Buttons>
            <Buttons>
              <Button dark={darkMode ? "true" : "false"}>View Works</Button>
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
          </Buttons>
        </Main>
      </AboutMeWrapper>
    </Section>
  );
};

export default AboutMe;
