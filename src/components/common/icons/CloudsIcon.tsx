import * as React from 'react';

export const CloudsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 134 104' fill='none' {...props}>
    <g filter='url(#clouds_svg__a)'>
      <path
        fill='url(#clouds_svg__b)'
        fillRule='evenodd'
        d='M113.046 20.278q0 .799-.061 1.583a12.8 12.8 0 0 1 8.172-2.935c7.093 0 12.843 5.75 12.843 12.843 0 6.866-5.388 12.473-12.167 12.825v.017H72.491v-.07C66.033 43.865 61 38.405 61 31.769c0-6.65 5.054-12.12 11.53-12.777C73.195 8.392 82.002 0 92.769 0c11.199 0 20.278 9.079 20.278 20.278'
        clipRule='evenodd'
      />
    </g>
    <g filter='url(#clouds_svg__c)'>
      <ellipse cx={53.5} cy={72.5} fill='#949494' fillOpacity={0.7} rx={31.5} ry={9.5} />
    </g>
    <g filter='url(#clouds_svg__d)'>
      <path
        fill='url(#clouds_svg__e)'
        fillRule='evenodd'
        d='M77 35q0 1.183-.09 2.342A18.92 18.92 0 0 1 89 33c10.493 0 19 8.507 19 19 0 10.158-7.971 18.454-18 18.974V71H17v-.104C7.447 69.896 0 61.818 0 52c0-9.838 7.478-17.93 17.06-18.902C18.04 17.416 31.07 5 47 5c16.569 0 30 13.432 30 30'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <filter
        id='clouds_svg__a'
        width={87}
        height={58.611}
        x={54}
        y={-7}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={3.5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_19_1221' />
        <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_19_1221' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_19_1221' />
      </filter>
      <filter
        id='clouds_svg__c'
        width={107}
        height={63}
        x={0}
        y={41}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_19_1221' stdDeviation={11} />
      </filter>
      <filter
        id='clouds_svg__d'
        width={122}
        height={80}
        x={-7}
        y={-2}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={3.5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_19_1221' />
        <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_19_1221' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_19_1221' />
      </filter>
      <linearGradient
        id='clouds_svg__b'
        x1={98.852}
        x2={126.227}
        y1={60.495}
        y2={0}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#DFDFDF' />
        <stop offset={1} stopColor='#92AABB' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='clouds_svg__e'
        x1={56}
        x2={96.5}
        y1={94.5}
        y2={5}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#DFDFDF' />
        <stop offset={1} stopColor='#92AABB' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
