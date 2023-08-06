import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (${breakpoints.desktopSmall}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const TextContent = styled.div`
  max-width: 400px;

  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 500px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    max-width: 400px;
  }
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
  color: ${colors.textSecondary};
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 14px;
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 16px;
    margin-bottom: 12px;
    text-align: left;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 18px;
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;

  @media screen and (${breakpoints.tabletSmall}) {
    height: 300px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 400px;
  }

  @media screen and (${breakpoints.desktop}) {
    height: 500px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 48px;

  @media screen and (${breakpoints.desktopSmall}) {
    justify-content: flex-start;
  }
`;
