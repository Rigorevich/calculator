import { useEffect } from 'react';

export const useKeyPress = (condition, action) => {
  useEffect(() => {
    const onKeyup = (e) => {
      const key = e.key;

      if (condition(key)) {
        action(key);
      }
    };
    window.addEventListener('keydown', onKeyup);
    return () => window.removeEventListener('keydown', onKeyup);
  }, []);
};
