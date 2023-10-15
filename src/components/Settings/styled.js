import styled from 'styled-components';

export const Box = styled.main`
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 30px;
`;

export const Title = styled.h3`
  font-size: 30px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 15rem;
  padding: 0.5em 2em 0.5em 1em;
  border: 1px solid ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.terniaryBackground};
  color: ${(props) => props.theme.primaryText};
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;
