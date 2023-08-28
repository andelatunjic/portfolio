import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import Section from "../../components/Section/Section";
import Navigation from "../../components/Navigation/Navigation";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import {
  FooterWrapper,
  FooterInner,
  Rights,
} from "./FooterStyle";

const Footer = ({background}) => {
  const { darkMode } = useContext(OptionsContext);
  const { t } = useTranslation();

  return (
    <Section background={background}>
      <FooterWrapper dark={darkMode}>
        <FooterInner>
          <SocialMedia />
          <Navigation />
          <Rights>{t("footerRights")}</Rights>
        </FooterInner>
      </FooterWrapper>
    </Section>
  );
};

Footer.propTypes = {
  background: PropTypes.string,
};

export default Footer;
