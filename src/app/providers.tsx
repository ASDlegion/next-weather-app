'use client';

import { useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ ...props }: ThemeProviderProps) => {
  useEffect(() => {
    if (window.localStorage.getItem('theme') === 'dark')
      document.documentElement.classList.add('dark');
  });
  return <>{props.children}</>;
};

export { ThemeProvider };
