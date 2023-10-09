import { useDispatch } from 'react-redux';

import { toggleSidebar } from '../../store/actions/historyActions';

import { HistoryIcon } from './styled';

export const ControlPanel = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSidebar());
  };

  return <HistoryIcon onClick={handleClick} />;
};
