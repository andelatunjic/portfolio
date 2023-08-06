import React, { useEffect, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { OptionsContext } from "../../context/OptionsContext";
import Tooltip from "@mui/material/Tooltip";
import LanguageIcon from "../../assets/images/language.png";
import Hamburger from "../../assets/images/hamburger.png";
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
  const { darkMode, setDarkMode, language, setLanguage } =
    useContext(OptionsContext);
  const [cookies, setCookie] = useCookies(["theme", "language"]);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (cookies.theme) {
      setDarkMode(cookies.theme == "dark" ? true : false);
    }
    if (cookies.language) {
      setLanguage(cookies.language == "english" ? "english" : "croatian");
    }
  }, []);

  useEffect(() => {
    const cookieValue = darkMode ? "dark" : "light";
    document.body.style.backgroundColor = darkMode ? "#1F2937" : "#FFFFFF";
    setCookie("theme", cookieValue);
  }, [darkMode]);

  useEffect(() => {
    const cookieValue = language == "english" ? "english" : "croatian";
    setCookie("language", cookieValue);
  }, [language]);

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

  const languageHandler = () => {
    setLanguage(language == "english" ? "croatian" : "english");
  };

  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <HeaderWrapper dark={darkMode ? "true" : "false"} scroll={cls}>
      <HeaderInner>
        <HamburgerIcon
          src={Hamburger}
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
            label={darkMode ? "Dark" : "Light"}
            sx={{
              fontSize: 8,
              "& .MuiTypography-root": {
                fontSize: 12,
              },
            }}
          />
          <LanguageWrapper>
            <LanguageImg src={LanguageIcon} alt="Language icon" />
            <Tooltip title="Change language">
              <Language onClick={languageHandler}>
                {language == "english" ? "EN" : "HR"}
              </Language>
            </Tooltip>
          </LanguageWrapper>
        </WebsiteOptions>
      </HeaderInner>
      <Sidebar closeMenu={sidebarHandler} show={sidebar} />
    </HeaderWrapper>
  );
};

export default Header;
