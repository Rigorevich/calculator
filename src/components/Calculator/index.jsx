import { useSelector } from 'react-redux';

import { useCalculator } from '@/hooks';
import { Display, Keypad, History, ControlPanel } from '../';

import { Box, Container, Section } from './styled';

export const Calculator = () => {
  const history = useSelector((state) => state.history);
  const expression = useSelector((state) => state.expression);

  const { isOpen, operations } = history;
  const { pressKey } = useCalculator();

  return (
    <Box>
      <Container>
        <Section>
          <Display expression={expression} />
          <Keypad handlePressKey={pressKey} />
        </Section>
        {isOpen && <History operations={operations} />}
        <ControlPanel />
      </Container>
    </Box>
  );
};
