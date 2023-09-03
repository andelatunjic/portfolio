import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";

export const TagWrapper = styled.div`
  background-color: ${colors.accentColorPurple};
  padding: 2px 4px;
  border-radius: 4px;
`;

export const TagText = styled.div`
  color: ${colors.textPrimaryLight};
  font-family: ${fonts.secondary};
  font-size: 12px;
  letter-spacing: 1px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 14px;
  }
`;
