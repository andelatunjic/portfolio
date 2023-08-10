import React, { useRef } from "react";
import GirlIllustration from "../../assets/images/girl.png";
import Intro from "../../modules/Intro/Intro";
import AboutMe from "../../modules/AboutMe/AboutMe";
import ContactMe from "../../modules/ContactMe/ContactMe";
import Footer from "../../modules/Footer/Footer";

const Home = () => {
  const aboutMeRef = useRef(null);
  const contactMeRef = useRef(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContactMe = () => {
    contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Intro aboutMeHandler={scrollToAboutMe} contactMeHandler={scrollToContactMe} illustration={GirlIllustration} />
      <AboutMe reference={aboutMeRef} />
      <ContactMe reference={contactMeRef} />
      <Footer background="secondary" />
    </>
  );
};

export default Home;
