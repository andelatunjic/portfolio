import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";

export const ProjectCardWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  padding: 20px;
  background-color: rgba(1, 1, 1, 0.15);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
