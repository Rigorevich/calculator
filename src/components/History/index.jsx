import PropTypes from 'prop-types';

import { Box, Container, Title, Content, Operation } from './styled';

export const History = ({ operations }) => {
  return (
    <Box>
      <Container>
        <Title>History</Title>
        <Content data-test="history">
          {operations.map((expression, i) => (
            <Operation key={i} data-test="history-expression">
              {expression}
            </Operation>
          ))}
        </Content>
      </Container>
    </Box>
  );
};

History.propTypes = {
  operations: PropTypes.arrayOf(PropTypes.string).isRequired,
};
