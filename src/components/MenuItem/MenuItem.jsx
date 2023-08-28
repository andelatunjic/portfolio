import React from "react";
import PropTypes from "prop-types";
import {
  NavLinkWrapper,
  LogoutLinkWrapper,
  MenuItemInner,
  ItemImage,
  ItemText,
} from "./MenuItemStyle";

const MenuItem = ({ imgSrc, imgAlt, itemText, path, onClick, logout }) => {
  return (
    <>
      {logout ? (
        <LogoutLinkWrapper onClick={onClick}>
          <MenuItemInner>
            <ItemImage src={imgSrc} alt={imgAlt} />
            <ItemText>{itemText}</ItemText>
          </MenuItemInner>
        </LogoutLinkWrapper>
      ) : (
        <NavLinkWrapper to={path}>
          <MenuItemInner>
            <ItemImage src={imgSrc} alt={imgAlt} />
            <ItemText>{itemText}</ItemText>
          </MenuItemInner>
        </NavLinkWrapper>
      )}
    </>
  );
};

MenuItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  itemText: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
  logout: PropTypes.bool,
};

export default MenuItem;
