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
  height: 70px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 0 40px;
  }
`;

export const Logo = styled.div`
  color: ${colors.accentColorPurple};
  font-family: ${fonts.secondary};
  font-size: 22px;
  font-weight: 800;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WebsiteOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
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
  > *:not(:last-child) {
    margin-right: 32px;
  }
`;

export const NavigationLink = styled(NavLink)`
  transition: color 0.3s ease-out;

  &.active {
    text-decoration: underline;
    color: ${colors.accentColorPurple};
    font-weight: 800;
  }

  &:hover {
    color: ${colors.accentColorPurple};
  }
`;
