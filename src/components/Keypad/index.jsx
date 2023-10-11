import PropTypes from 'prop-types';

import { keys } from '../../utils/keys';
import { useKeyPress } from '../../hooks';

import { Box, Container, Row, Button } from './styled';

export const Keypad = ({ handlePressKey }) => {
  useKeyPress(
    (key) => Object.keys(keys).includes(key),
    (key) => {
      handlePressKey(keys[key]);
    }
  );

  return (
    <Box>
      <Container>
        <Row>
          <Button onClick={() => handlePressKey('C')}>C</Button>
          <Button onClick={() => handlePressKey('7')}>7</Button>
          <Button onClick={() => handlePressKey('8')}>8</Button>
          <Button onClick={() => handlePressKey('9')}>9</Button>
          <Button onClick={() => handlePressKey('*')}>*</Button>
        </Row>
        <Row>
          <Button onClick={() => handlePressKey('-')}>-</Button>
          <Button onClick={() => handlePressKey('4')}>4</Button>
          <Button onClick={() => handlePressKey('5')}>5</Button>
          <Button onClick={() => handlePressKey('6')}>6</Button>
          <Button onClick={() => handlePressKey('/')}>/</Button>
        </Row>
        <Row>
          <Button onClick={() => handlePressKey('+')}>+</Button>
          <Button onClick={() => handlePressKey('1')}>1</Button>
          <Button onClick={() => handlePressKey('2')}>2</Button>
          <Button onClick={() => handlePressKey('3')}>3</Button>
          <Button onClick={() => handlePressKey('=')}>=</Button>
        </Row>
        <Row>
          <Button onClick={() => handlePressKey('.')}>.</Button>
          <Button onClick={() => handlePressKey('(')}>(</Button>
          <Button onClick={() => handlePressKey('0')}>0</Button>
          <Button onClick={() => handlePressKey(')')}>)</Button>
          <Button onClick={() => handlePressKey('CE')}>CE</Button>
        </Row>
      </Container>
    </Box>
  );
};

Keypad.propTypes = {
  handlePressKey: PropTypes.func,
};
