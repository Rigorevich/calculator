import PropTypes from 'prop-types';

import { keys } from '@/utils/keys';
import { useKeyPress } from '@/hooks';

import { Box, Container, Row, Button } from './styled';

const buttons = [
  ['C', '7', '8', '9', '*'],
  ['-', '4', '5', '6', '/'],
  ['+', '1', '2', '3', '='],
  ['.', '(', '0', ')', 'CE'],
];

export const Keypad = ({ handlePressKey }) => {
  useKeyPress(
    (key) => keys.hasOwnProperty(key),
    (key) => {
      handlePressKey(keys[key]);
    }
  );

  const handleClick = (e) => {
    handlePressKey(e.target.dataset.key);
  };

  return (
    <Box>
      <Container>
        {buttons.map((row, i) => (
          <Row key={i}>
            {row.map((button) => (
              <Button key={button} data-key={button} onClick={handleClick}>
                {button}
              </Button>
            ))}
          </Row>
        ))}
      </Container>
    </Box>
  );
};

Keypad.propTypes = {
  handlePressKey: PropTypes.func.isRequired,
};
