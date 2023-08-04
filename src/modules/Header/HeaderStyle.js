import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";
import { NavLink } from "react-router-dom";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  top: ${(props) => (props.scroll === "visible" ? "0" : "-80px")};
  transition: top 0.3s ease-out;

  font-family: ${fonts.primary};
  background-color: ${colors.backgroundLight};
  color: ${colors.textPrimaryLight};

  ${(props) =>
    props.dark == "true" &&
    `
    background-color: ${colors.backgroundDark};
    color: ${colors.textPrimaryDark}
  `}
`;

export const HeaderInner = styled.div`
  height: 80px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const HeaderContent = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

export const WebsiteOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 15px;
  }
`;

export const ThemeSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase": {
    transitionDuration: "300ms",
    color: "#1F2937",
    "& + .MuiSwitch-track": {
      backgroundColor: "#B3AFF8",
      opacity: 1,
    },
    "&.Mui-checked": {
      color: "#FFFFFF",
      "& + .MuiSwitch-track": {
        backgroundColor: "#B3AFF8",
        opacity: 1,
      },
    },
  },
}));

export const SwitchLabel = styled(FormControlLabel)`
  && {
    color: ${colors.textPrimaryLight};
    margin: 0;

    ${(props) =>
      props.dark == "true" &&
      `
      color: ${colors.textPrimaryDark}
    `}
  }
`;

export const Navigation = styled.nav`
  display: none;

  > *:not(:last-child) {
    margin-right: 32px;
  }

  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
`;

export const NavigationLink = styled(NavLink)`
  transition: color 0.3s ease-out;
  font-size: 16px;

  &.active {
    text-decoration: underline;
    color: ${colors.accentColorPurple};
    font-weight: 800;
  }

  &:hover {
    color: ${colors.accentColorPurple};
  }
`;

export const Language = styled.p`
  margin-left: 4px;
  font-size: 12px;
  line-height: 0px;
  cursor: pointer;

  &:hover {
    color: ${colors.accentColorPurple};
  }
`;

export const LanguageImg = styled.img`
  height: 18px;
`;

export const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HamburgerIcon = styled.img`
  display: block;
  cursor: pointer;
  height: 18px;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (${breakpoints.tabletSmall}) {
    height: 22px;
  }

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;
