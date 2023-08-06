import styled from "styled-components";
import { breakpoints, colors, fonts } from "./theme";

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    ${colors.accentColorPink},
    ${colors.accentColorYellow}
  );
  transition: background-color 0.3s ease-out;
  border: none;
  font-family: ${fonts.secondary};
  color: ${colors.textPrimaryDark};
  font-weight: 500;
  font-size: 12px;

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 10px 18px;
    font-size: 14px;
  }

  &:hover {
    background: transparent;
    border: 1.8px solid ${colors.accentColorPink};

    ${(props) =>
      props.dark == "true" &&
      `
      background: transparent;
      color: ${colors.textPrimaryLight}
    `}
  }
`;

export const OutlineButton = styled.button`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease-out;
  font-family: ${fonts.secondary};
  font-weight: 500;
  font-size: 12px;
  border: 1.8px solid ${colors.accentColorPink};
  background-color: transparent;
  color: ${colors.textPrimaryDark};

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 10px 18px;
    font-size: 14px;
  }

  &:hover {
    background: linear-gradient(
      to right,
      ${colors.accentColorPink},
      ${colors.accentColorYellow}
    );
    color: ${colors.textPrimaryDark};
  }

  ${(props) =>
    props.dark == "true" &&
    `
    color: ${colors.textPrimaryLight}
  `}
`;

export const Grid = styled.div`
  display: grid;
  gap: 32px;

  @media screen and (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
