import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const SectionWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  color: ${colors.textPrimaryDark};

  ${(props) =>
    props.dark &&
    `
    background-color: ${colors.backgroundDark};
    color: ${colors.textPrimaryLight}
  `}

  ${(props) =>
    props.background == "secondary" &&
    `
    background-color: ${colors.backgroundLightSecondary};
  `}

  ${(props) =>
    props.background == "secondary" &&
    props.dark &&
    `
    background-color: ${colors.backgroundDarkSecondary};
    color: ${colors.textPrimaryLight}
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
