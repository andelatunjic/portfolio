import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";
import { NavLink } from "react-router-dom";

export const FooterWrapper = styled.header`
  background-color: ${colors.backgroundLight};
  color: ${colors.textPrimaryLight};

  ${(props) =>
    props.dark &&
    `
    background-color: ${colors.backgroundDark};
    color: ${colors.textPrimaryDark}
  `}
`;

export const FooterInner = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
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

export const SocialMedia = styled.div`
  display: flex;
  gap: 24px;
`;

export const SocialMediaLogo = styled.img`
  width: 34px;
  transition: 0.5s;

  &:hover {
    
    transform: translateY(-10px);
  }
`;

export const Navigation = styled.div`
  display: none;

  > *:not(:last-child) {
    margin-right: 32px;
  }

  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
`;

export const NavigationLink = styled(NavLink)`
  transition: font 0.3s ease-out;
  font-size: 16px;
  font-weight: 400;

  &.active {
    color: ${colors.accentColorPurple};
    font-weight: 700;
  }

  &:hover {
    font-weight: 700;
  }
`;

export const Rights = styled.p`
  font-size: 12px;
  margin-bottom: 8px;
`;
