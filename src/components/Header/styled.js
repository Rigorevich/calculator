import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Box = styled.header`
  background-color: ${(props) => props.theme.secondaryBackground};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 30px;
`;

export const Logo = styled.h2`
  color: ${(props) => props.theme.accentText};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    transition: all 0.3s ease;
    background-color: ${(props) => props.theme.accentText};
  }

  &.active {
    color: ${(props) => props.theme.accentText};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 2px;
      background-color: ${(props) => props.theme.accentText};
      width: 100%;
      left: 0;
    }
  }

  &.active::after,
  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 16px;
  }
`;
