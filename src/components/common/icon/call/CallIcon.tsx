import * as React from 'react';
import { FC } from 'react';

const CallIcon: FC = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <path
      stroke="#2B2B2B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 5c1.5 0 3 1.5 3 3m-4-7c4 0 8 4 8 8M5.533 13.467c-2.738-2.738-4.006-5.26-4.396-6.138A1.682 1.682 0 0 1 1 6.642V4.828a2 2 0 0 1 .586-1.414l1-1a2 2 0 0 1 2.828 0l1.427 1.427a2 2 0 0 1 .25 2.523l-.447.67c-.398.597-.449 1.364-.084 1.982.381.645.91 1.455 1.44 1.984.53.53 1.339 1.059 1.984 1.44.618.365 1.384.314 1.982-.084l.67-.447a2 2 0 0 1 2.523.25l1.427 1.427a2 2 0 0 1 0 2.828l-1 1a2 2 0 0 1-1.414.586h-1.814c-.237 0-.47-.041-.687-.137-.878-.39-3.4-1.658-6.138-4.396Z"
    />
  </svg>
);
export default CallIcon;
