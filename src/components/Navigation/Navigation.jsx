import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OptionsContext } from "../../context/OptionsContext";
import {
  NavigationWrapper,
  Nav,
  NavigationLink,
  LogoutLink,
} from "./NavigationStyle";
import { useTranslation } from "react-i18next";
import { auth } from "../../firebase/firebase";

const Navigation = () => {
  const { t } = useTranslation();
  const { authUser } = useContext(OptionsContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      auth.signOut();
      localStorage.removeItem("userToken");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NavigationWrapper>
      <Nav>
        <NavigationLink to={"/"}>{t("firstNavItem")}</NavigationLink>
        <NavigationLink to={"/skills"}>{t("secondNavItem")}</NavigationLink>
        <NavigationLink to={"/experience"}>{t("thirdNavItem")}</NavigationLink>
        {!authUser && (
        <NavigationLink to={"/login"}>{t("forthNavItem")}</NavigationLink>
      )}
      </Nav>
      {authUser && (
        <LogoutLink onClick={logoutHandler}>{t("fifthNavItem")}</LogoutLink>
      )}
    </NavigationWrapper>
  );
};

export default Navigation;
