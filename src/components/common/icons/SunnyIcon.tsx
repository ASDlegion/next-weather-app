import * as React from 'react';

export const SunnyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 110' fill='none' {...props}>
    <g filter='url(#sunny_svg__a)'>
      <circle cx={55} cy={55} r={32} fill='url(#sunny_svg__b)' />
    </g>
    <defs>
      <linearGradient
        id='sunny_svg__b'
        x1={55}
        x2={55}
        y1={23}
        y2={87}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FDC500' />
        <stop offset={1} stopColor='#FD8900' />
      </linearGradient>
      <filter
        id='sunny_svg__a'
        width={96}
        height={96}
        x={7}
        y={7}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={8} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0.992157 0 0 0 0 0.773882 0 0 0 0 0 0 0 0 1 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_771' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={5.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0 0 0 0 0 0.45 0' />
        <feBlend in2='effect1_dropShadow_1_771' result='effect2_dropShadow_1_771' />
        <feBlend in='SourceGraphic' in2='effect2_dropShadow_1_771' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx={-1} dy={3} />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0.35 0' />
        <feBlend in2='shape' result='effect3_innerShadow_1_771' />
      </filter>
    </defs>
  </svg>
);
