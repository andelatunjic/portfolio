import React, { useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { OptionsContext } from "../../context/OptionsContext";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import LanguageIcon from "../../assets/images/language.png";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  HeaderContent,
  WebsiteOptions,
  ThemeSwitch,
  SwitchLabel,
  Navigation,
  NavigationLink,
  Language,
  LanguageImg,
  LanguageWrapper,
} from "./HeaderStyle";

const Header = () => {
  const { darkMode, setDarkMode, language, setLanguage } =
    useContext(OptionsContext);
  const [cookies, setCookie] = useCookies(["theme", "language"]);

  const themeHandler = () => {
    setDarkMode(!darkMode);
  };

  const languageHandler = () => {
    setLanguage(language == "english" ? "croatian" : "english");
  };

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
    setCookie("theme", cookieValue);
  }, [darkMode]);

  useEffect(() => {
    const cookieValue = language == "english" ? "english" : "croatian";
    setCookie("language", cookieValue);
  }, [language]);

  return (
    <HeaderWrapper dark={darkMode ? "true" : "false"}>
      <HeaderInner>
        <Link to="/">
          <Logo>Tunjich.dev</Logo>
        </Link>
        <HeaderContent>
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
          <Navigation>
            <NavigationLink to={"/"}>Home</NavigationLink>
            <NavigationLink to={"/skills"}>Skills</NavigationLink>
            <NavigationLink to={"/experience"}>Experience</NavigationLink>
            <NavigationLink to={"/login"}>Login</NavigationLink>
          </Navigation>
        </HeaderContent>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
