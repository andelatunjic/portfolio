import styled from "styled-components";
import { breakpoints } from "../../utils/theme";

export const CardWrapper = styled.div``;

export const CardContent = styled.div`
  width: 100%;
  background-color: rgba(1, 1, 1, 0.05);
  box-shadow: 0px 20px 53px -30px rgba(1, 1, 1, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 12px;
`;

export const CardInner = styled.div`
  padding: 14px 14px;

  @media screen and (${breakpoints.tablet}) {
    padding: 24px 24px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 20px;
  }
`;

export const CardSubtitle = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 8px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 16px;
  }
`;

export const AdminOptions = styled.div`
  display: none;

  ${(props) =>
    props.auth &&
    `
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-bottom: 8px;
  `}
`;
