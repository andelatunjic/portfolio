import styled from 'styled-components';
import { colors, fonts, breakpoints } from '../../utils/theme';
import { NavLink } from 'react-router-dom';

export const NavLinkWrapper = styled(NavLink)`
  display: block;
  background-color: ${colors.accentColorYellow};
  border-radius: 0 18px 18px 0;
  margin-bottom: 8px;

  &.active {
    font-weight: 700;
    background: linear-gradient(
      to right,
      ${colors.accentColorPink},
      ${colors.accentColorYellow}
    );
  }

  &:hover {
    font-weight: 600;
    background-color: ${colors.accentColorPink};
  }
`;

export const MenuItemInner = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  padding: 14px;
`;

export const ItemImage = styled.img`
  padding-right: 18px;
  height: 16px;

  @media screen and (${breakpoints.tabletSmall}) {
    height: 18px;
  }
`;

export const ItemText = styled.p`
  color: ${colors.textPrimaryLight};
  font-family: ${fonts.secondary};
  font-size: 12px;

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 14px;
  }
`;
