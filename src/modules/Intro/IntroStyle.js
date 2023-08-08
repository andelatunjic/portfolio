import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 160px);
  margin: 80px 0;

  @media screen and (${breakpoints.desktopSmall}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const TextContent = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 500px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    max-width: 400px;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;
  margin-top: 28px;

  @media screen and (${breakpoints.tabletSmall}) {
    height: 300px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 400px;
    margin-top: 0;
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
  margin-bottom: 28px;

  @media screen and (${breakpoints.desktopSmall}) {
    justify-content: flex-start;
    margin-bottom: 48px;
  }
`;
