import React from "react";
import PropTypes from "prop-types";
import {
  NavLinkWrapper,
  MenuItemInner,
  ItemImage,
  ItemText,
} from "./MenuItemStyle";

const MenuItem = ({ imgSrc, imgAlt, itemText, path, onClick }) => {
  return (
    <NavLinkWrapper to={path} onClick={onClick}>
      <MenuItemInner>
          <ItemImage src={imgSrc} alt={imgAlt} />
          <ItemText>{itemText}</ItemText>
      </MenuItemInner>
    </NavLinkWrapper>
  );
};

MenuItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  itemText: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuItem;
