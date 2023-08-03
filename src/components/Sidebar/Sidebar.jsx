import React from "react";
import PropTypes from "prop-types";
import { SidebarWrapper, MenuItem } from "./SidebarStyle";

const Sidebar = ({ closeMenu, show }) => {
  return (
    <SidebarWrapper show={show}>
      <MenuItem onClick={closeMenu}>X</MenuItem>
      <MenuItem>Home</MenuItem>
      <MenuItem>Skills</MenuItem>
      <MenuItem>Experience</MenuItem>
      <MenuItem>Login</MenuItem>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  closeMenu: PropTypes.func,
  show: PropTypes.bool,
};

export default Sidebar;
