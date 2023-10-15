import React from 'react';

import { routes } from '@/utils/routes';

import { Box, Container, Logo, Nav, List, Item, Link } from './styled';

export const Header = () => {
  return (
    <Box data-test="header">
      <Container>
        <Logo>Calculator App</Logo>
        <Nav data-test="header-nav">
          <List>
            {routes.map(({ path, label }) => (
              <Item key={path}>
                <Link data-test="header-link" to={path}>
                  {label}
                </Link>
              </Item>
            ))}
          </List>
        </Nav>
      </Container>
    </Box>
  );
};
