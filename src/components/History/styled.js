import styled from 'styled-components';

export const Box = styled.aside`
  flex: 0 0 250px;
  border-left: 2px solid ${(props) => props.theme.primaryText};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  max-height: calc(100vh - 180px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transperent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 1px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`;

export const Operation = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
`;
