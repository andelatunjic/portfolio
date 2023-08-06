import React, { useRef } from "react";
import GirlIllustration from "../../assets/images/girl.png";
import Intro from "../../modules/Intro/Intro";
import AboutMe from "../../modules/AboutMe/AboutMe";

const Home = () => {
  const ref = useRef(null);

  const scrollToSection = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Intro clickHandler={scrollToSection} illustration={GirlIllustration} />
      <AboutMe reference={ref}>Here is all about me.</AboutMe>
    </>
  );
};

export default Home;
