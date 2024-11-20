import * as React from 'react';

export const RainyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 99' fill='none' {...props}>
    <g filter='url(#rainy_svg__a)'>
      <ellipse cx={53.5} cy={67.5} fill='#949494' fillOpacity={0.7} rx={31.5} ry={9.5} />
    </g>
    <g filter='url(#rainy_svg__b)'>
      <path
        fill='url(#rainy_svg__c)'
        fillRule='evenodd'
        d='M77 30q0 1.183-.09 2.342A18.92 18.92 0 0 1 89 28c10.493 0 19 8.507 19 19 0 10.158-7.971 18.454-18 18.974V66H17v-.104C7.447 64.896 0 56.818 0 47c0-9.838 7.478-17.93 17.06-18.902C18.04 12.416 31.07 0 47 0c16.569 0 30 13.432 30 30'
        clipRule='evenodd'
      />
    </g>
    <path
      fill='url(#rainy_svg__d)'
      fillRule='evenodd'
      d='M27.326 78.578c.406.276.883.423 1.37.422.442.003.877-.112 1.262-.334a2.57 2.57 0 0 0 .933-.933l28.043-46.721a2.74 2.74 0 0 0 .32-2.003 2.67 2.67 0 0 0-1.143-1.656 2.61 2.61 0 0 0-1.96-.271 2.68 2.68 0 0 0-1.605 1.185L26.503 74.92a2.67 2.67 0 0 0 .073 2.957c.201.283.456.522.75.702M8.607 79a2.42 2.42 0 0 1-1.371-.422 2.6 2.6 0 0 1-.75-.702 2.67 2.67 0 0 1-.073-2.957l20.09-32.93a2.6 2.6 0 0 1 .684-.77c.276-.206.59-.353.923-.432a2.47 2.47 0 0 1 1.958.357c.578.377.989.972 1.143 1.656.154.685.039 1.405-.32 2.003L10.8 77.733c-.226.39-.548.71-.933.933-.385.222-.82.337-1.26.334m41.62 0a2.42 2.42 0 0 1-1.372-.422 2.6 2.6 0 0 1-.75-.702 2.672 2.672 0 0 1-.073-2.957l14.193-23.361a2.6 2.6 0 0 1 1.614-1.173 2.55 2.55 0 0 1 1.952.329c.578.376.988.971 1.142 1.656s.04 1.404-.32 2.003L52.42 77.733a2.64 2.64 0 0 1-.938.924c-.383.221-.816.34-1.256.343'
      clipRule='evenodd'
    />
    <path
      fill='#E0E0E0'
      fillRule='evenodd'
      d='M17.96 66H17v-.104a19 19 0 0 1-4.459-1.022l13.962-22.885a2.6 2.6 0 0 1 .684-.77c.276-.206.59-.353.923-.432a2.47 2.47 0 0 1 1.958.357c.578.377.989.972 1.143 1.656.154.685.039 1.405-.32 2.003zm13.904 0 22.682-37.732a2.68 2.68 0 0 1 1.605-1.186 2.61 2.61 0 0 1 1.96.27c.579.377.989.972 1.143 1.657s.04 1.404-.32 2.003L37.934 66zm27.685 0h-6.098l8.774-14.442a2.6 2.6 0 0 1 1.614-1.173 2.55 2.55 0 0 1 1.952.329c.578.376.988.971 1.142 1.656a2.74 2.74 0 0 1-.32 2.003z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='rainy_svg__c'
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
        id='rainy_svg__d'
        x1={14.708}
        x2={64.804}
        y1={68.476}
        y2={18.875}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#68717E' />
        <stop offset={1} stopColor='#DAE3EC' />
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
        <feGaussianBlur result='effect1_foregroundBlur_19_1466' stdDeviation={11} />
      </filter>
      <filter
        id='rainy_svg__b'
        width={122}
        height={80}
        x={-7}
        y={-7}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={3.5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_19_1466' />
        <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_19_1466' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_19_1466' />
      </filter>
    </defs>
  </svg>
);
