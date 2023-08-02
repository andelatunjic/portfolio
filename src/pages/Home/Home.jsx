import React from "react";
import Section from "../../components/Section/Section";
import GirlIllustration from '../../assets/girl.png';
import Intro from "../../components/Intro/Intro";

const Home = () => {
  return (
    <Section>
      <Intro illustration={GirlIllustration} />
    </Section>
  );
};

export default Home;
