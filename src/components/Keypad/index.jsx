import PropTypes from 'prop-types';

import { keys } from '../../utils/keys';
import { useKeyPress } from '../../hooks';

import { Box, Container, Row, Button } from './styled';

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
        <Row>
          <Button data-key="C" onClick={handleClick}>
            C
          </Button>
          <Button data-key="7" onClick={handleClick}>
            7
          </Button>
          <Button data-key="8" onClick={handleClick}>
            8
          </Button>
          <Button data-key="9" onClick={handleClick}>
            9
          </Button>
          <Button data-key="*" onClick={handleClick}>
            *
          </Button>
        </Row>
        <Row>
          <Button data-key="-" onClick={handleClick}>
            -
          </Button>
          <Button data-key="4" onClick={handleClick}>
            4
          </Button>
          <Button data-key="5" onClick={handleClick}>
            5
          </Button>
          <Button data-key="6" onClick={handleClick}>
            6
          </Button>
          <Button data-key="/" onClick={handleClick}>
            /
          </Button>
        </Row>
        <Row>
          <Button data-key="+" onClick={handleClick}>
            +
          </Button>
          <Button data-key="1" onClick={handleClick}>
            1
          </Button>
          <Button data-key="2" onClick={handleClick}>
            2
          </Button>
          <Button data-key="3" onClick={handleClick}>
            3
          </Button>
          <Button data-key="=" onClick={handleClick}>
            =
          </Button>
        </Row>
        <Row>
          <Button data-key="." onClick={handleClick}>
            .
          </Button>
          <Button data-key="(" onClick={handleClick}>
            (
          </Button>
          <Button data-key="0" onClick={handleClick}>
            0
          </Button>
          <Button data-key=")" onClick={handleClick}>
            )
          </Button>
          <Button data-key="C" onClick={handleClick}>
            CE
          </Button>
        </Row>
      </Container>
    </Box>
  );
};

Keypad.propTypes = {
  handlePressKey: PropTypes.func.isRequired,
};
