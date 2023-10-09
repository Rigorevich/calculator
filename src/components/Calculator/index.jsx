import { useSelector } from 'react-redux';

import { useCalculator } from '../../hooks';
import { Display, Keypad, History, ControlPanel } from '../';

import '../../utils/calculating';

import { Box, Container, Section } from './styled';

export const Calculator = () => {
  const { state, pressKey } = useCalculator();
  const { isOpen, operations } = useSelector((state) => state.history);

  return (
    <Box>
      <Container>
        <Section>
          <Display expression={state} />
          <Keypad handlePressKey={(key) => pressKey(key)} />
        </Section>
        {isOpen && <History operations={operations} />}
        <ControlPanel />
      </Container>
    </Box>
  );
};
