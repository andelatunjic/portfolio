import styled from "styled-components";
import { breakpoints, colors } from "../../utils/theme";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
  background-color: ${colors.backgroundLight};
  color: ${colors.backgroundDark};

  ::placeholder {
    color: ${colors.backgroundDark};
  }

  ${(props) =>
    props.dark &&
    `
    background-color: ${colors.backgroundDark};
    color: ${colors.backgroundLight};

    ::placeholder{
      color: ${colors.backgroundLight};
    }
  `}

  :focus {
    outline: none;
    box-shadow: 0 2px 10px ${colors.accentColorPurple};
  }
`;
