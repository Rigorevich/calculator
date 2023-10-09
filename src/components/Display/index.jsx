import PropTypes from 'prop-types';

import { Box, Container, Label } from './styled';

export const Display = ({ expression }) => {
  return (
    <Box>
      <Container>
        <Label>{expression || 0}</Label>
      </Container>
    </Box>
  );
};

Display.propTypes = {
  expression: PropTypes.string,
};
