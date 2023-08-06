import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { OptionsContext } from "../../context/OptionsContext";
import {
  SectionWrapper,
  SectionInner,
} from './SectionStyle';

const Section = ({ children, background }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <SectionWrapper dark={darkMode} background={background}>
      <SectionInner>
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

export default Section;
