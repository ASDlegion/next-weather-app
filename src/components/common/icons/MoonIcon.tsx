import * as React from 'react';

export const MoonIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    className='fill-slate-100'
    {...props}
  >
    <path d='M12 11.807A9 9 0 0 1 10.049 2a9.94 9.94 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.95 9.95 0 0 0 2.735-5.119A9 9 0 0 1 12 11.807' />
  </svg>
);
