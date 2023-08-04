import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";

export const LogoWrapper = styled.div`
  color: ${colors.accentColorPurple};
  font-family: ${fonts.secondary};
  font-size: 18px;
  font-weight: 800;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 22px;
  }

  ${(props) =>
    props.dark &&
    `
    color: ${colors.accentColorPurpleLight};
  `}

  ${(props) =>
    props.isHeader &&
    `
    display: none;

    @media screen and (${breakpoints.tablet}) {
      display: block;
    }
  `}

  ${(props) =>
    props.isSidebar &&
    `
    display: block;
    font-size: 16px;
    font-weight: 600;

    @media screen and (${breakpoints.tabletSmall}) {
      font-size: 18px;
    }
  `}

  &:hover {
    transform: scale(1.05);
  }
`;
