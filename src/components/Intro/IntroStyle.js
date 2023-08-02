import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TextContent = styled.div`
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 48px;
  letter-spacing: 1px;
`;

export const Subtitle = styled.p`
  color: ${colors.textSecondary};
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export const Image = styled.img``;
