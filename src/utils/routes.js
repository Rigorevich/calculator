import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';

export const routes = [
  { label: 'Home', path: '/', element: <Home /> },
  {
    label: 'Settings',
    path: '/settings',
    element: <Settings />,
  },
];
