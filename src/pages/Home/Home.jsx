import React from "react";
import HomeSection from "../../components/HomeSection/HomeSection";
import GirlIllustration from "../../assets/images/girl.png";
import Intro from "../../components/Intro/Intro";

const Home = () => {
  return (
    <HomeSection>
      <Intro illustration={GirlIllustration} />
      <section>Here is all about me.</section>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
    </HomeSection>
  );
};

export default Home;
