import React, { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LogoWrapper } from "./LogoStyle";

const Logo = ({ isHeader, isSidebar }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <Link to="/">
      <LogoWrapper dark={darkMode} isHeader={isHeader} isSidebar={isSidebar}>
        Tunjich.dev
      </LogoWrapper>
    </Link>
  );
};

Logo.propTypes = {
  isHeader: PropTypes.bool,
  isSidebar: PropTypes.bool,
};

export default Logo;
