import styled from 'styled-components';

export const Box = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 80px;
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  width: 115px;
  height: 115px;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.terniaryBachground};
  border: 1px solid ${(props) => props.theme.primaryText};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.95);
  }
`;
