import { getTheme } from './getTheme';

export const changeTheme = () => {
  const theme = getTheme();
  if (theme === 'light') {
    window.localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  } else {
    window.localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }
};
