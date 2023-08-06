import styled from "styled-components";
import { breakpoints } from "../../utils/theme";

export const FooterWrapper = styled.header`
  margin-top: 32px;
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

export const Rights = styled.p`
  font-size: 12px;
  margin-bottom: 8px;
`;
