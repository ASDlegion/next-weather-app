import { LogoIcon } from '@/components/common/icons';

import Link from 'next/link';

import { GithubIcon } from '../common/icons/GithubIcon';

import { Button } from './button';
import { Input } from './input';
import { ThemeButton } from './theme-button';

const NavigationBar = () => {
  return (
    <div className='fixed top-0 flex w-full items-center justify-around border border-indigo-200 px-5 py-3 text-indigo-400 backdrop-blur dark:border-neutral-700 dark:text-slate-100'>
      <Link href='/'>
        <div className='relative flex h-full items-center gap-1 text-2xl font-medium'>
          <LogoIcon />
          <span>wecast</span>
        </div>
      </Link>
      <Input placeholder='Search...' className='w-1/5'></Input>

      <div className='row flex gap-2 text-base'>
        <a href='https://github.com/' rel='noreferrer noopener' target='_blank'>
          <Button className='h-10 w-full text-base [&_svg]:size-6' variant='navbar_btn'>
            <GithubIcon />
            <span>github</span>
          </Button>
        </a>
        <ThemeButton></ThemeButton>
      </div>
    </div>
  );
};

export { NavigationBar };
