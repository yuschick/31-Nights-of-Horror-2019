import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import nav from '../../data/nav';
import theme from '../../theme';

const YearsNav = () => (
  <NavContainer>
    {nav.map(item => (
      <NavItem key={`nav${item.year}`}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.year}
        </a>
      </NavItem>
    ))}
  </NavContainer>
);

const NavContainer = styled.nav`
  display: flex;
`;

const NavItem = styled.li`
  align-self: center;
  color: ${lighten(0.1, theme.colors.lightGrey)};
  font: 1.5rem/1 ${theme.fonts.raleway};
  padding: 0 ${theme.space.default};

  & + & {
    border-left: 1px solid ${theme.colors.secondary};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.25s ease;

    &:hover {
      color: ${lighten(0.2, theme.colors.lightGrey)};
    }
  }
`;

export default YearsNav;
