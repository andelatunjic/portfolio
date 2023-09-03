import React, { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";

import PropTypes from "prop-types";
import { TagText, TagWrapper } from "./TagStyle";

const Tag = ({ tag }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <TagWrapper dark={darkMode}>
      <TagText dark={darkMode}>{tag}</TagText>
    </TagWrapper>
  );
};

Tag.propTypes = {
  tag: PropTypes.string,
};

export default Tag;
