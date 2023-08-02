import React, { useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { OptionsContext } from "../../context/OptionsContext";
import { Link } from "react-router-dom";
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
} from "./HeaderStyle";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(OptionsContext);
  const [cookies, setCookie, removeCookie] = useCookies(["theme"]);

  const themeHandler = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (cookies.theme) {
      setDarkMode(cookies.theme == "dark" ? true : false);
    }
  }, []);

  useEffect(() => {
    const cookieValue = darkMode ? "dark" : "light";
    setCookie("theme", cookieValue);
  }, [darkMode]);

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
