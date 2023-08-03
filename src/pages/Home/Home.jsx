import React, {useRef} from "react";
import HomeSection from "../../components/HomeSection/HomeSection";
import GirlIllustration from "../../assets/images/girl.png";
import Intro from "../../components/Intro/Intro";

const Home = () => {
  const ref = useRef(null);

  const scrollToSection = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <HomeSection>
      <Intro clickHandler={scrollToSection} illustration={GirlIllustration} />
      <section ref={ref}>Here is all about me.</section>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
      <p>hej</p>
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
