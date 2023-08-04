import React, { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import GitHub from "../../assets/images/github.png";
import Mail from "../../assets/images/message.png";
import LinkedIn from "../../assets/images/linkedin.png";
import {
  FooterWrapper,
  FooterInner,
  SocialMedia,
  SocialMediaLogo,
  Navigation,
  NavigationLink,
  Rights,
} from "./FooterStyle";

const Footer = () => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <FooterWrapper dark={darkMode}>
      <FooterInner>
        <SocialMedia>
          <a target="_blank" href="https://github.com/andelatunjic">
            <SocialMediaLogo src={GitHub} />
          </a>
          <a target="_blank" href="mailto:andtunjic@gmail.com">
            <SocialMediaLogo src={Mail} />
          </a>
          <a target="_blank" href="http://linkedin.com/in/an%C4%91ela-tunji%C4%87-a72012227">
            <SocialMediaLogo src={LinkedIn} />
          </a>
        </SocialMedia>
        <Navigation>
          <NavigationLink to={"/"}>Home</NavigationLink>
          <NavigationLink to={"/skills"}>Skills</NavigationLink>
          <NavigationLink to={"/experience"}>Experience</NavigationLink>
        </Navigation>
        <Rights>©2023 Anđela Tunjić | All rights Reserved</Rights>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
