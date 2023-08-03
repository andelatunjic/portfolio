import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../utils/theme";

export const SectionWrapper = styled.div`
  color: ${colors.textPrimaryLight};

  ${(props) =>
    props.dark == "true" &&
    `
    color: ${colors.textPrimaryDark}
  `}
`;

export const SectionInner = styled.div`
  padding: 0 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 0 40px;
    max-width: 1030px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1380px;
  }
`;
