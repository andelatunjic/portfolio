import styled from "styled-components";

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

  & > * {
    margin-bottom: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  height: 40px;
  margin-top: 16px;
`;

export const ForgotPasswordWrapper = styled.div`
  transition: font 0.3s ease-out;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
`;
