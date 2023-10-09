import styled from 'styled-components';

export const Box = styled.aside`
  flex: 0 0 250px;
  border-left: 2px solid ${(props) => props.theme.primaryText};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 50px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
`;

export const Operation = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
`;
