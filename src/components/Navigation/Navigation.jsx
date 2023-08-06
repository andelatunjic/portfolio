import React from "react";
import { NavigationWrapper, NavigationLink } from "./NavigationStyle";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationLink to={"/"}>Home</NavigationLink>
      <NavigationLink to={"/skills"}>Skills</NavigationLink>
      <NavigationLink to={"/experience"}>Experience</NavigationLink>
      <NavigationLink to={"/login"}>Login</NavigationLink>
    </NavigationWrapper>
  );
};

export default Navigation;
