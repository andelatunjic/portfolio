import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const AboutMeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px;
`;

export const Illustration = styled.img`
  height: 350px;
`;

export const Title = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 24px;
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 32px;
    text-align: left;
    margin-bottom: 8px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 40px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;

  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 600px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    max-width: 500px;
  }
`;

export const Intro = styled.p`
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

export const Description = styled.p`
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 12px;
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 14px;
    margin-bottom: 12px;
    text-align: left;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media screen and (${breakpoints.desktopSmall}) {
    justify-content: flex-start;
  }
`;
