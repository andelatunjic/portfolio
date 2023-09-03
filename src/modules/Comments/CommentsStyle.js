import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";

export const CommentsWrapper = styled.div`
  margin-top: 24px;

  @media screen and (${breakpoints.tablet}) {
    margin-top: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 32px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 28px;
  }
`;

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 55% 45%;
    gap: 24px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    grid-template-columns: 60% 40%;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: 70% 30%;
  }
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

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

export const NewComment = styled.div``;

export const ButtonWrapper = styled.div`
  height: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.textSecondary};
  border-radius: 12px;
  padding: 0 24px;

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 0 24px;
  }
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
