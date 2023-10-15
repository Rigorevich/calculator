import { ReactComponent as History } from '@/assets/icons/history.svg';

import styled from 'styled-components';

export const HistoryIcon = styled(History)`
  position: absolute;
  top: 32px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: ${(props) => props.theme.primaryText};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentBackground};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
