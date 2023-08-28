import styled from "styled-components";
import { breakpoints } from "../../utils/theme";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.div`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: block;
    display: flex;
    gap: 22px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    gap: 32px;
  }
`;

export const Nav = styled.nav`
  @media screen and (${breakpoints.tablet}) {
    > *:not(:last-child) {
      margin-right: 22px;
    }
  }

  @media screen and (${breakpoints.desktopSmall}) {
    > *:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  transition: font 0.3s ease-out;
  font-size: 14px;
  font-weight: 400;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 16px;
  }

  &.active {
    background-color: rgba(134, 134, 134, 0.3);
    padding: 6px 14px;
    border-radius: 18px;
  }

  &:hover {
    font-weight: 700;
  }
`;

export const LogoutLink = styled.p`
  transition: font 0.3s ease-out;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 16px;
  }

  &.active {
    background-color: rgba(134, 134, 134, 0.3);
    padding: 6px 14px;
    border-radius: 18px;
  }

  &:hover {
    font-weight: 700;
  }
`;
