import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const TextContent = styled.div`
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 48px;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.div`
  color: ${colors.textSecondary};
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 12px;
`;

export const Image = styled.img``;

export const Buttons = styled.div`
    display: flex;
    gap: 12px;
`;
