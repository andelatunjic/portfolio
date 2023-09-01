import styled from "styled-components";
import { breakpoints } from "../../utils/theme";

export const NotFoundWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;

  @media screen and (${breakpoints.desktopSmall}) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 200px;

  @media screen and (${breakpoints.tablet}) {
    width: 300px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    width: 400px;
  }
`;

export const Content = styled.div`
  max-width: 400px;

  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 500px;
  }

  @media screen and (${breakpoints.tablet}) {
    max-width: 600px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    max-width: 700px;
  }
`;
