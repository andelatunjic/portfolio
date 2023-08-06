import React, { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import Section from "../../components/Section/Section";
import Navigation from "../../components/Navigation/Navigation";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import {
  FooterWrapper,
  FooterInner,
  Rights,
} from "./FooterStyle";

const Footer = () => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <Section>
      <FooterWrapper dark={darkMode}>
        <FooterInner>
          <SocialMedia />
          <Navigation />
          <Rights>©2023 Anđela Tunjić | All rights Reserved</Rights>
        </FooterInner>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
