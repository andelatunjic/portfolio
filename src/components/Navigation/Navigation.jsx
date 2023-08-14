import React from "react";
import { NavigationWrapper, NavigationLink } from "./NavigationStyle";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <NavigationWrapper>
      <NavigationLink to={"/"}>{t("firstNavItem")}</NavigationLink>
      <NavigationLink to={"/skills"}>{t("secondNavItem")}</NavigationLink>
      <NavigationLink to={"/experience"}>{t("thirdNavItem")}</NavigationLink>
      <NavigationLink to={"/login"}>{t("forthNavItem")}</NavigationLink>
    </NavigationWrapper>
  );
};

export default Navigation;
