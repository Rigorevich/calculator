import PropTypes from 'prop-types';

import { Box, Container, Input } from './styled';

export const Display = ({ expression }) => {
  return (
    <Box>
      <Container>
        <Input value={expression || 0} disabled />
      </Container>
    </Box>
  );
};

Display.propTypes = {
  expression: PropTypes.string,
};
