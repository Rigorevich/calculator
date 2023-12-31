import { Header, Calculator } from '@/components';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Calculator />
    </Wrapper>
  );
};
