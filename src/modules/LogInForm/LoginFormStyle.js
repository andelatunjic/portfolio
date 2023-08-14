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
