import styled from "styled-components";
import { breakpoints } from "../../../utils/theme";

export const LoginFormWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 460px;
  padding: 24px;
  border-radius: 24px;
  background-color: rgba(1, 1, 1, 0.1);
  box-shadow: 0px 4px 20px 0px rgba(1, 1, 1, 0.6);

  & > * {
    margin-bottom: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  height: 36px;
  margin-top: 16px;
  display: flex;
  gap: 12px;
`;

export const ForgotPasswordWrapper = styled.div`
  margin-top: 16px;
  transition: font 0.3s ease-out;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (${breakpoints.tablet}) {
    margin-top: 24px;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
`;
