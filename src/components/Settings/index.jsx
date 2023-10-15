import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTheme } from '@/store/actions/themeActions';
import { clearHistory } from '@/store/actions/historyActions';
import { Dropdown } from '../Dropdown';

import { Box, Container, Title, Button } from './styled';

export const Settings = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <Box>
      <Container>
        <Title>Settings</Title>
        <Dropdown theme={theme} cb={(option) => dispatch(toggleTheme(option))} />
        <Button data-test="settings-clear-history" onClick={() => dispatch(clearHistory())}>
          Clear all history
        </Button>
      </Container>
    </Box>
  );
};
