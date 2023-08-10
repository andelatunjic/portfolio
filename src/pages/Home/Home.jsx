import React, { useRef } from "react";
import GirlIllustration from "../../assets/images/girl.png";
import Intro from "../../modules/Intro/Intro";
import AboutMe from "../../modules/AboutMe/AboutMe";
import ContactMe from "../../modules/ContactMe/ContactMe";
import Footer from "../../modules/Footer/Footer";

const Home = () => {
  const ref = useRef(null);

  const scrollToSection = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Intro clickHandler={scrollToSection} illustration={GirlIllustration} />
      <AboutMe reference={ref}>Here is all about me.</AboutMe>
      <ContactMe />
      <Footer background="secondary" />
    </>
  );
};

export default Home;
