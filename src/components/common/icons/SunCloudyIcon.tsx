import * as React from 'react';

export const SunCloudyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126 120' fill='none' {...props}>
    <g filter='url(#sunny_svg__a)'>
      <ellipse cx={53.5} cy={88.5} fill='#949494' fillOpacity={0.7} rx={31.5} ry={9.5} />
    </g>
    <g filter='url(#sunny_svg__b)'>
      <circle cx={84} cy={42} r={26} fill='url(#sunny_svg__c)' />
    </g>
    <g filter='url(#sunny_svg__d)'>
      <path
        fill='url(#sunny_svg__e)'
        fillRule='evenodd'
        d='M77 51q0 1.183-.09 2.342A18.92 18.92 0 0 1 89 49c10.493 0 19 8.507 19 19 0 10.158-7.971 18.454-18 18.974V87H17v-.104C7.447 85.896 0 77.818 0 68c0-9.838 7.478-17.93 17.06-18.902C18.04 33.416 31.07 21 47 21c16.569 0 30 13.432 30 30'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <filter
        id='sunny_svg__a'
        width={107}
        height={63}
        x={0}
        y={57}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_19_1235' stdDeviation={11} />
      </filter>
      <filter
        id='sunny_svg__b'
        width={84}
        height={84}
        x={42}
        y={0}
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_19_1235' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={5.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0 0 0 0 0 0.45 0' />
        <feBlend in2='effect1_dropShadow_19_1235' result='effect2_dropShadow_19_1235' />
        <feBlend in='SourceGraphic' in2='effect2_dropShadow_19_1235' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx={-1} dy={3} />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0.35 0' />
        <feBlend in2='shape' result='effect3_innerShadow_19_1235' />
      </filter>
      <filter
        id='sunny_svg__d'
        width={122}
        height={80}
        x={-7}
        y={14}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={3.5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_19_1235' />
        <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_19_1235' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_19_1235' />
      </filter>
      <linearGradient
        id='sunny_svg__c'
        x1={84}
        x2={84}
        y1={16}
        y2={68}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FDC500' />
        <stop offset={1} stopColor='#FD8900' />
      </linearGradient>
      <linearGradient
        id='sunny_svg__e'
        x1={56}
        x2={96.5}
        y1={110.5}
        y2={21}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#DFDFDF' />
        <stop offset={1} stopColor='#92AABB' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
