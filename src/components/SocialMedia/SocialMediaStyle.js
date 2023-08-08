import styled from "styled-components";
import { breakpoints } from "../../utils/theme";

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialMediaLogo = styled.img`
  transition: 0.5s;
  width: 24px;

  @media screen and (${breakpoints.tablet}) {
    width: 28px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    width: 34px;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;
