import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const AboutMeWrapper = styled.div`
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const Illustration = styled.img`
  height: 350px;
  display: none;

  @media screen and (${breakpoints.desktopSmall}) {
    display: block;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  align-items: center;

  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 500px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    align-items: flex-start;
  }
`;
