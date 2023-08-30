import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 104px;

  @media screen and (${breakpoints.tablet}) {
    margin-top: 150px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    margin-top: 120px;
  }
`;

export const DesignBox = styled.div`
  width: 90%;
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
  background-color: rgba(1, 1, 1, 0.08);
  box-shadow: 0px 20px 53px -30px rgba(1, 1, 1, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 24px;
  height: auto;

  width: 800px;
  padding: 24px 24px;
  margin-top: 124px;

  @media screen and (${breakpoints.tablet}) {
    padding: 70px 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 40px 40px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;
