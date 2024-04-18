import * as React from 'react';
import { FC } from 'react';

const SvgComponent: FC = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={5}
    fill="none"
    {...props}
  >
    <path stroke="#2B2B2B" d="m1 .523 3.5 3.5L8 .523" />
  </svg>
);
export default SvgComponent;
