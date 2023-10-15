import styled from 'styled-components';

export const Box = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 80px;
  border-bottom: 2px solid ${(props) => props.theme.primaryText};

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }
`;

export const Input = styled.input`
  text-align: right;
  width: 100%;
  color: ${(props) => props.theme.primaryText};
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 48px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
