import styled from "styled-components";
import { breakpoints } from "../../utils/theme";

export const ProjectsWrapper = styled.div`
  margin-top: 24px;

  @media screen and (${breakpoints.tablet}) {
    margin-top: 32px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;

  @media screen and (${breakpoints.tabletSmall}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1.5;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 28px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AddNew = styled.div`
  display: none;

  ${(props) =>
    props.auth &&
    `
    display: block;
  `}
`;
