import * as React from 'react';

export const WindyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 129 99' fill='none' {...props}>
    <path
      stroke='url(#windy_svg__a)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={7}
      d='M79 41h32c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10h-5'
    />
    <g filter='url(#windy_svg__b)'>
      <ellipse cx={53.5} cy={67.5} fill='#949494' fillOpacity={0.7} rx={31.5} ry={9.5} />
    </g>
    <g filter='url(#windy_svg__c)'>
      <path
        fill='url(#windy_svg__d)'
        fillRule='evenodd'
        d='M77 30q0 1.183-.09 2.342A18.92 18.92 0 0 1 89 28c10.493 0 19 8.507 19 19 0 10.158-7.971 18.454-18 18.974V66H17v-.104C7.447 64.896 0 56.818 0 47c0-9.838 7.478-17.93 17.06-18.902C18.04 12.416 31.07 0 47 0c16.569 0 30 13.432 30 30'
        clipRule='evenodd'
      />
    </g>
    <path
      stroke='url(#windy_svg__e)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={7}
      d='M64 54h51.5c5.523 0 10 4.477 10 10v0c0 5.523-4.477 10-10 10h-5'
    />
    <path
      fill='#E0E0E0'
      fillRule='evenodd'
      d='M107.678 50.5a18.9 18.9 0 0 1-2.84 7H64a3.5 3.5 0 1 1 0-7z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='windy_svg__a'
        x1={84.996}
        x2={101.488}
        y1={36.952}
        y2={7.72}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#68717E' />
        <stop offset={1} stopColor='#DAE3EC' />
      </linearGradient>
      <linearGradient
        id='windy_svg__d'
        x1={56}
        x2={96.5}
        y1={89.5}
        y2={0}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#DFDFDF' />
        <stop offset={1} stopColor='#92AABB' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='windy_svg__e'
        x1={72.779}
        x2={85.708}
        y1={58.048}
        y2={91.604}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#68717E' />
        <stop offset={1} stopColor='#DAE3EC' />
      </linearGradient>
      <filter
        id='windy_svg__b'
        width={107}
        height={63}
        x={0}
        y={36}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_19_1449' stdDeviation={11} />
      </filter>
      <filter
        id='windy_svg__c'
        width={122}
        height={80}
        x={-7}
        y={-7}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={3.5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_19_1449' />
        <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_19_1449' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_19_1449' />
      </filter>
    </defs>
  </svg>
);
