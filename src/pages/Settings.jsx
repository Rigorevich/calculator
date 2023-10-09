import { Header, Settings as Content } from '../components';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Settings = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};
