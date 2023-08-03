import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { OptionsContext } from "../../context/OptionsContext";
import {
  SectionWrapper,
  SectionInner,
} from './HomeSectionStyle';

const HomeSection = ({ children }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <SectionWrapper dark={darkMode ? "true" : "false"}>
      <SectionInner>
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

HomeSection.propTypes = {
  children: PropTypes.node,
};

export default HomeSection;
