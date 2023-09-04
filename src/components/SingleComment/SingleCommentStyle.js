import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";

export const Comment = styled.div`
  border-radius: 12px;
  padding: 24px 16px;

  ${(props) =>
    props.identified &&
    `
      border: 1px solid ${colors.accentColorPurple};
  `}
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Info = styled.div`
  display: flex;
  gap: 14px;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Name = styled.h3`
  font-size: 18px;
`;

export const Date = styled.p`
  color: ${colors.accentColorPurple};
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 14px;
  }
`;

export const Content = styled.div`
  color: ${colors.textSecondary};
`;
export const AdminActions = styled.div`
  display: none;

  ${(props) =>
    props.identified &&
    `
    display: flex;
    gap: 3px;
  `}
`;
