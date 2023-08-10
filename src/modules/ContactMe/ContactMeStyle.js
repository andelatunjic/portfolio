import styled from "styled-components";
import { colors } from "../../utils/theme";
import Background from "../../assets/images/planesBackground.png";

export const ContactWrapper = styled.div`
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextWrapper = styled.div``;

export const Form = styled.form`
  background-color: rgba(1, 1, 1, 0.2);
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
