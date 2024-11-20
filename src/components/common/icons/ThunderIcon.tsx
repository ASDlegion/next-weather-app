import * as React from 'react';

export const ThunderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 100' fill='none' {...props}>
    <g filter='url(#rainy_svg__a)'>
      <ellipse cx={53.5} cy={67.5} fill='#949494' fillOpacity={0.7} rx={31.5} ry={9.5} />
    </g>
    <path
      fill='url(#rainy_svg__b)'
      d='m32.807 75.281 13.1-24.05a.44.44 0 0 1 .39-.231h16.984c.33 0 .545.347.397.643l-6.806 13.59a.444.444 0 0 0 .397.642H64L26.878 98.356c-.373.327-.919-.111-.681-.546l11.59-21.216a.444.444 0 0 0-.39-.656h-4.2a.444.444 0 0 1-.39-.657'
    />
    <g filter='url(#rainy_svg__c)'>
      <path
        fill='url(#rainy_svg__d)'
        fillRule='evenodd'
        d='M77 30q0 1.183-.09 2.342A18.92 18.92 0 0 1 89 28c10.493 0 19 8.507 19 19 0 10.158-7.971 18.454-18 18.974V66H17v-.104C7.447 64.896 0 56.818 0 47c0-9.838 7.478-17.93 17.06-18.902C18.04 12.416 31.07 0 47 0c16.569 0 30 13.432 30 30'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <linearGradient
        id='rainy_svg__b'
        x1={44.5}
        x2={44.5}
        y1={51}
        y2={100}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F8FD00' />
        <stop offset={1} stopColor='#FD9800' />
      </linearGradient>
      <linearGradient
        id='rainy_svg__d'
        x1={56}
        x2={96.5}
        y1={89.5}
        y2={0}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#DFDFDF' />
        <stop offset={1} stopColor='#92AABB' stopOpacity={0} />
      </linearGradient>
      <filter
        id='rainy_svg__a'
        width={107}
        height={63}
        x={0}
        y={36}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_19_1295' stdDeviation={11} />
      </filter>
      <filter
        id='rainy_svg__c'
        width={122}
        height={80}
        x={-7}
        y={-7}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={3.5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_19_1295' />
        <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_19_1295' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_19_1295' />
      </filter>
    </defs>
  </svg>
);
