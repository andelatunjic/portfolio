import styled from "styled-components";

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialMediaLogo = styled.img`
  width: 34px;
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);
  }
`;
