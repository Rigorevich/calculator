import PropTypes from 'prop-types';

import { Box, Container, Title, Content, Operation } from './styled';

export const History = ({ operations }) => {
  return (
    <Box>
      <Container>
        <Title>History</Title>
        <Content>
          {operations.map((_, i) => (
            <Operation key={i}>{i + 1}</Operation>
          ))}
        </Content>
      </Container>
    </Box>
  );
};

History.propTypes = {
  operations: PropTypes.arrayOf(PropTypes.string).isRequired,
};
