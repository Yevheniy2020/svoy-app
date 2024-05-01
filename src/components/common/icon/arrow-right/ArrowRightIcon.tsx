import * as React from 'react';
import { FC } from 'react';

const ArrowRightIcon: FC = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#2B2B2B"
      strokeLinecap="square"
      strokeWidth={2}
      d="M26 7.757H2.875m23.125 0-4.922-4.958M26 7.757l-4.922 4.958"
    />
  </svg>
);
export default ArrowRightIcon;
