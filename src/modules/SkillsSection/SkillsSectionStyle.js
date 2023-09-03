import styled from "styled-components";
import { breakpoints } from "../../utils/theme";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const Progress = styled(LinearProgress)(() => ({
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#E1E1E1",
    height: 10,
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#FF93A9",
    borderRadius: 5,
  },
}));

export const SkillsWrapper = styled.div`
  margin-top: 104px;

  @media screen and (${breakpoints.tablet}) {
    margin-top: 120px;
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

export const SkillCardWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
`;

export const Category = styled.h3`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 12px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 18px;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemWrapper = styled.div``;

export const Content = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 14px;
  }
`;

export const Figure = styled.figure`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
