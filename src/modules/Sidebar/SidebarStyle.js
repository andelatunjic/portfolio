import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../utils/theme";

export const SidebarWrapper = styled.div`
  height: 100%;
  width: ${(props) => (props.show ? "220px" : "0")};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${colors.backgroundLight};
  overflow-x: hidden;
  transition: 0.4s;
  border-radius: 0 18px 18px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);

  ${(props) =>
    props.dark &&
    `
    background-color: ${colors.backgroundDark};
  `}

  @media screen and (${breakpoints.tabletSmall}) {
    width: ${(props) => (props.show ? "260px" : "0")};
  }

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const Header = styled.div`
  height: 80px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIcon = styled.img`
  height: 24px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Navigation = styled.div`
  padding-right: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 84px);
`;

export const LogoutWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Content = styled.div``;
