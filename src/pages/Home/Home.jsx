import React, {useRef} from "react";
import GirlIllustration from "../../assets/images/girl.png";
import HomeSection from "../../components/HomeSection/HomeSection";
import Intro from "../../modules/Intro/Intro";

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
