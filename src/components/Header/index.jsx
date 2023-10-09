import React from 'react';

import { routes } from '../../utils/routes';

import { Box, Container, Logo, Nav, List, Item, Link } from './styled';

export const Header = () => {
  return (
    <Box>
      <Container>
        <Logo>Calculator App</Logo>
        <Nav>
          <List>
            {routes.map(({ path, label }) => (
              <Item key={path}>
                <Link to={path}>{label}</Link>
              </Item>
            ))}
          </List>
        </Nav>
      </Container>
    </Box>
  );
};
