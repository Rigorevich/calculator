import styled from 'styled-components';

export const DropDownContainer = styled.div`
  width: 15rem;
`;

export const DropDownLabel = styled.span`
  display: inline-block;
  margin-bottom: 0.2em;
`;

export const DropDownHeader = styled.div`
  text-transform: capitalize;
  border: 1px solid ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.terniaryBackground};
  padding: 0.5em 2em 0.5em 1em;
  margin-bottom: 0.2em;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.div`
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.terniaryBackground};
  border: 1px solid ${(props) => props.theme.primaryText};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const DropDownItem = styled.div`
  text-transform: capitalize;
  list-style: none;
  cursor: pointer;
  transition: opacity easy-it-out 0.2s;
  border-bottom: 1px solid ${(props) => props.theme.primaryText};
  padding: 0.5em 1em;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  &:last-child {
    border-bottom: none;
  }
`;
