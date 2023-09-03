import React, { useEffect, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { OptionsContext } from "../../context/OptionsContext";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import LanguageIcon from "../../assets/images/language.png";
import Hamburger from "../../assets/images/hamburger.png";
import HamburgerDark from "../../assets/images/hamburgerDark.png";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import {
  HeaderWrapper,
  HeaderInner,
  WebsiteOptions,
  ThemeSwitch,
  SwitchLabel,
  Language,
  LanguageImg,
  LanguageWrapper,
  HamburgerIcon,
} from "./HeaderStyle";

const Header = () => {
  const { t, i18n } = useTranslation();

  const { darkMode, setDarkMode } = useContext(OptionsContext);
  const [cookies, setCookie] = useCookies(["theme", "language"]);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (cookies.theme) {
      setDarkMode(cookies.theme == "dark" ? true : false);
    }
  }, []);

  useEffect(() => {
    const cookieValue = darkMode ? "dark" : "light";
    document.body.style.backgroundColor = darkMode ? "#1F2937" : "#FFFFFF";
    setCookie("theme", cookieValue);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(position > window.pageYOffset);
      setPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";

  const themeHandler = () => {
    setDarkMode(!darkMode);
  };

  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <HeaderWrapper dark={darkMode ? "true" : "false"} scroll={cls}>
      <HeaderInner>
        <HamburgerIcon
          src={darkMode ? Hamburger : HamburgerDark}
          alt="Hamburger menu icon"
          onClick={sidebarHandler}
        />
        <Logo isHeader />
        <Navigation />
        <WebsiteOptions>
          <SwitchLabel
            dark={darkMode ? "true" : "false"}
            control={
              <ThemeSwitch
                size="small"
                checked={darkMode}
                onChange={themeHandler}
              />
            }
            label={darkMode ? t("dark") : t("light")}
            sx={{
              fontSize: 8,
              "& .MuiTypography-root": {
                fontSize: 12,
              },
            }}
          />
          <Tooltip title={t("languageTooltip")}>
            <LanguageWrapper
              onClick={() =>
                i18n.changeLanguage(
                  i18n.resolvedLanguage === "en" ? "hrv" : "en"
                )
              }
            >
              <LanguageImg src={LanguageIcon} alt="Language icon" />
              <Language>
                {i18n.resolvedLanguage === "en" ? "EN" : "HRV"}
              </Language>
            </LanguageWrapper>
          </Tooltip>
        </WebsiteOptions>
      </HeaderInner>
      <Sidebar closeMenu={sidebarHandler} show={sidebar} />
    </HeaderWrapper>
  );
};

export default Header;
