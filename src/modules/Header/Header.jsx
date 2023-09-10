import React, { useEffect, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { OptionsContext } from "../../context/OptionsContext";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import Hamburger from "../../assets/images/hamburger.png";
import HamburgerDark from "../../assets/images/hamburgerDark.png";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import LightMode from "@mui/icons-material/LightModeOutlined";
import DarkMode from "@mui/icons-material/NightlightOutlined";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import { auth } from "../../firebase/firebase";
import {
  HeaderWrapper,
  HeaderInner,
  WebsiteOptions,
  Language,
  LanguageWrapper,
  HamburgerIcon,
} from "./HeaderStyle";

const Header = () => {
  const { t, i18n } = useTranslation();

  const { darkMode, setDarkMode, setAuthUser } = useContext(OptionsContext);
  const [cookies, setCookie] = useCookies(["theme", "language"]);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (cookies.theme) {
      setDarkMode(cookies.theme == "dark" ? true : false);
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  useEffect(() => {
    const cookieValue = darkMode ? "dark" : "light";
    document.body.style.backgroundColor = darkMode ? "#1F2937" : "#FFFFFF";
    setCookie("theme", cookieValue, {
      expires: new Date(Date.now() + 31536000 * 1000),
    });
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

  const header = visible ? "visible" : "hidden";

  const themeHandler = () => {
    setDarkMode(!darkMode);
  };

  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <HeaderWrapper dark={darkMode ? "true" : "false"} scroll={header}>
      <HeaderInner>
        <HamburgerIcon
          src={darkMode ? Hamburger : HamburgerDark}
          alt="Hamburger menu icon"
          onClick={sidebarHandler}
        />
        <Logo isHeader />
        <Navigation />
        <WebsiteOptions>
          {darkMode ? (
            <LightMode
              onClick={themeHandler}
              sx={{ color: "#F9FAFB", cursor: "pointer" }}
              fontSize="medium"
            />
          ) : (
            <DarkMode
              onClick={themeHandler}
              sx={{ color: "#5c6bc0", cursor: "pointer" }}
              fontSize="medium"
            />
          )}
          <Tooltip title={t("languageTooltip")}>
            <LanguageWrapper
              onClick={() =>
                i18n.changeLanguage(
                  i18n.resolvedLanguage === "en" ? "hrv" : "en"
                )
              }
            >
              <LanguageIcon
                sx={{ color: darkMode ? "#F9FAFB" : "#5c6bc0" }}
                fontSize="medium"
              />
              <Language>
                {i18n.resolvedLanguage === "en" ? "HRV" : "EN"}
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
