import styled from 'styled-components';

export const Box = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 80px;
  border-bottom: 2px solid ${(props) => props.theme.primaryText};
`;

export const Label = styled.span`
  font-size: 48px;
  font-weight: 500;
`;
