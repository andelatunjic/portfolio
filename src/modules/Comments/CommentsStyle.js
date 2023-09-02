import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const CommentsWrapper = styled.div`
  margin-top: 24px;

  @media screen and (${breakpoints.tablet}) {
    margin-top: 32px;
  }
`;