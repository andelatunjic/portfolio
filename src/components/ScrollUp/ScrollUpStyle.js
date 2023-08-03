import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const ScrollButton = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s, visibility 0.3s;
  background: radial-gradient(
    circle at center,
    ${colors.accentColorPurple},
    ${colors.accentColorPink}
  );

  height: 30px;
  width: 30px;
  bottom: 60px;
  right: 24px;

  @media screen and (${breakpoints.tablet}) {
    height: 40px;
    width: 40px;
    right: 32px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 50px;
    width: 50px;
  }

  &:hover {
    background: ${colors.accentColorPurple};
  }
`;

export const Arrow = styled.img`
  height: 34px;

  @media screen and (${breakpoints.tablet}) {
    height: 44px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 54px;
  }
`;
