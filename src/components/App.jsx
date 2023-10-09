import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { GlobalStyle } from '../globalStyles';
import { routes } from '../utils/routes';

const router = createBrowserRouter(routes);

export const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
