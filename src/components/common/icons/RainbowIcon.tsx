import * as React from 'react';

export const RainbowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 121 114' fill='none' {...props}>
    <g filter='url(#rainbow_svg__a)'>
      <ellipse cx={53.5} cy={81.96} fill='#949494' fillOpacity={0.7} rx={31.5} ry={9.5} />
    </g>
    <path
      stroke='url(#rainbow_svg__b)'
      strokeLinecap='round'
      strokeWidth={5.289}
      d='M104.682 56.004c8.468-13.996 3.986-32.205-10.01-40.673C80.678 6.864 62.468 11.346 54 25.341'
    />
    <path
      stroke='url(#rainbow_svg__c)'
      strokeLinecap='round'
      strokeWidth={5.289}
      d='M100.157 53.266c6.956-11.496 3.274-26.454-8.222-33.41s-26.454-3.273-33.41 8.223'
    />
    <path
      stroke='url(#rainbow_svg__d)'
      strokeLinecap='round'
      strokeWidth={5.289}
      d='M95.632 50.528c5.443-8.997 2.562-20.703-6.435-26.146S68.494 21.82 63.05 30.817'
    />
    <path
      stroke='url(#rainbow_svg__e)'
      strokeLinecap='round'
      strokeWidth={5.289}
      d='M91.107 47.79c3.93-6.497 1.85-14.952-4.648-18.883s-14.952-1.85-18.883 4.647'
    />
    <g filter='url(#rainbow_svg__f)'>
      <path
        fill='url(#rainbow_svg__g)'
        fillRule='evenodd'
        d='M77 44.284q0 1.183-.09 2.343A18.92 18.92 0 0 1 89 42.284c10.493 0 19 8.507 19 19 0 10.158-7.971 18.454-18 18.974v.026H17v-.104c-9.553-1-17-9.078-17-18.896 0-9.838 7.478-17.93 17.06-18.902C18.04 26.7 31.07 14.284 47 14.284c16.569 0 30 13.432 30 30'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <linearGradient
        id='rainbow_svg__b'
        x1={94.672}
        x2={79.341}
        y1={15.331}
        y2={40.672}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF5C5C' />
        <stop offset={1} stopColor='#A40000' />
      </linearGradient>
      <linearGradient
        id='rainbow_svg__c'
        x1={92.239}
        x2={80.239}
        y1={18.5}
        y2={39.5}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFEE5A' />
        <stop offset={1} stopColor='#AF7E00' />
      </linearGradient>
      <linearGradient
        id='rainbow_svg__d'
        x1={89.197}
        x2={79.341}
        y1={24.382}
        y2={40.672}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#5CB1FF' />
        <stop offset={1} stopColor='#004DA8' />
      </linearGradient>
      <linearGradient
        id='rainbow_svg__e'
        x1={86.459}
        x2={79.341}
        y1={28.907}
        y2={40.672}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#9A5CFF' />
        <stop offset={1} stopColor='#16009C' />
      </linearGradient>
      <linearGradient
        id='rainbow_svg__g'
        x1={56}
        x2={96.5}
        y1={103.784}
        y2={14.284}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#DFDFDF' />
        <stop offset={1} stopColor='#92AABB' stopOpacity={0} />
      </linearGradient>
      <filter
        id='rainbow_svg__a'
        width={107}
        height={63}
        x={0}
        y={50.46}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_19_1278' stdDeviation={11} />
      </filter>
      <filter
        id='rainbow_svg__f'
        width={122}
        height={80}
        x={-7}
        y={7.284}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={3.5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_19_1278' />
        <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_19_1278' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_19_1278' />
      </filter>
    </defs>
  </svg>
);
