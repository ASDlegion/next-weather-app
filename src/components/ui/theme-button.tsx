'use client';
import { MoonIcon, SunIcon } from '@/components/common/icons';

import { Button } from '@/components/ui';
import { changeTheme } from '@/lib/changeTheme';
import { getTheme } from '@/lib/getTheme';
import { useEffect, useState } from 'react';

const ThemeButton = () => {
  const [icon, setTheme] = useState<'dark' | 'light'>();

  const changeIcon = () => {
    getTheme() === 'dark' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    changeIcon();
  }, []);

  return (
    <Button
      className='h-10 w-10'
      size='icon'
      variant='navbar_btn'
      onClick={() => {
        changeTheme();
        changeIcon();
      }}
    >
      {icon === 'light' && <SunIcon />}
      {icon === 'dark' && <MoonIcon />}
    </Button>
  );
};

export { ThemeButton };
