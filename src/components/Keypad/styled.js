import styled from 'styled-components';

export const Box = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 80px;

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }
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
  background-color: ${(props) => props.theme.terniaryBackground};
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

  @media (max-width: 1280px) {
    font-size: 32px;
    width: 100px;
    height: 100px;
  }

  @media (max-width: 1024px) {
    font-size: 28px;
    width: 75px;
    height: 75px;
  }

  @media (max-width: 485px) {
    font-size: 22px;
    width: 55px;
    height: 55px;
    border-radius: 15px;
  }
`;
