import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";

export const ProjectCardWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 20px rgba(92, 107, 192, 0.8);
  }
`;

export const ProjectFigure = styled.figure`
  width: 100%;
  height: 180px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectTitle = styled.h3`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 18px;
  }
`;

export const ProjectDate = styled.p`
  color: ${colors.accentColorPurple};
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 12px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 14px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 12px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const AdminActions = styled.div`
  display: none;

  ${(props) =>
    props.auth &&
    `
    display: flex;
    gap: 3px;
  `}
`;
