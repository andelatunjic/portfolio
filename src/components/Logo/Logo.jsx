import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LogoWrapper } from "./LogoStyle";

const Logo = ({ isHeader, isSidebar }) => {
  return (
    <Link to="/">
      <LogoWrapper isHeader={isHeader} isSidebar={isSidebar}>Tunjich.dev</LogoWrapper>
    </Link>
  );
};

Logo.propTypes = {
  isHeader: PropTypes.bool,
  isSidebar: PropTypes.bool,
};

export default Logo;
