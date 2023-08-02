import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../utils/theme";

export const SectionWrapper = styled.div`
  font-family: ${fonts.primary};
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;

  background-color: ${colors.backgroundLight};
  color: ${colors.textPrimaryLight};

  ${(props) =>
    props.dark == "true" &&
    `
    background-color: ${colors.backgroundDark};
    color: ${colors.textPrimaryDark}
  `}
`;

export const SectionInner = styled.div`
  padding: 84px 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 100px 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 100px 40px;
    max-width: 930px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1280px;
  }
`;
