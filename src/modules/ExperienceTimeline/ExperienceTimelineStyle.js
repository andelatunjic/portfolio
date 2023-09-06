import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 104px;

  @media screen and (${breakpoints.tablet}) {
    margin-top: 120px;
  }
`;

export const DesignBox = styled.div`
  width: 95%;
  height: 400px;
  background: linear-gradient(
    to right,
    ${colors.accentColorPurpleLight},
    ${colors.accentColorPink}
  );
  border-radius: 24px;
  position: absolute;
`;

export const ExperienceWrapper = styled.div`
  background-color: rgba(1, 1, 1, 0.2);
  box-shadow: 0px 20px 53px -30px rgba(1, 1, 1, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  height: auto;

  width: 95%;
  padding: 24px 24px;
  margin-top: 124px;
  margin-bottom: 32px;

  @media screen and (${breakpoints.tablet}) {
    padding: 40px 40px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    display: flex;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const Date = styled.p`
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 0.5;
  font-style: italic;

  @media screen and (${breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const MobileVersion = styled.div`
  display: block;

  @media screen and (${breakpoints.tabletSmall}) {
    display: none;
  }
`;

export const NormalVersion = styled.div`
  display: none;

  @media screen and (${breakpoints.tabletSmall}) {
    display: block;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 14px;

  @media screen and (${breakpoints.tabletSmall}) {
    justify-content: flex-end;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    justify-content: flex-start;
  }
`;

export const AdminOptions = styled.div`
  display: none;

  ${(props) =>
    props.auth &&
    `
    display: block;
  `}
`;
