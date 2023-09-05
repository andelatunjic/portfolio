import styled from "styled-components";
import { breakpoints, colors, fonts } from "./theme";

export const Button = styled.button`
  cursor: pointer;
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
  font-size: 14px;
  width: ${(props) => props.fullWidth && "100%"};

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 10px 18px;
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

  &:disabled {
    background: ${colors.textSecondary};
    border: 0px;
    cursor: not-allowed;

    &:hover {
      color: ${colors.textPrimaryDark};
    }
  }
`;

export const OutlineButton = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease-out;
  font-family: ${fonts.secondary};
  font-weight: 500;
  font-size: 14px;
  border: 1.8px solid ${colors.accentColorPink};
  background-color: transparent;
  color: ${colors.textPrimaryDark};

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 10px 18px;
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
  gap: 16px;

  @media screen and (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    ${(props) =>
      props.fourcols &&
      `
        gap: 26px;
    `}
  }

  @media screen and (${breakpoints.desktopSmall}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  ${(props) =>
    props.fourcols &&
    `
      @media screen and (${breakpoints.desktop}) {
        grid-template-columns: repeat(4, 1fr);
      }
    `}
`;

export const Title = styled.h1`
  font-size: 24px;
  letter-spacing: 1px;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 32px;
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 40px;
    margin-bottom: 8px;
    text-align: left;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.div`
  color: ${(props) => !props.moreContrast && colors.textSecondary};
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 20px;
    margin-bottom: 12px;
    text-align: left;
  }
`;

export const SubtitleAlignLeft = styled.div`
  color: ${(props) => !props.moreContrast && colors.textSecondary};
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 32px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 16px;
    margin-bottom: 12px;
    text-align: left;
  }
`;
