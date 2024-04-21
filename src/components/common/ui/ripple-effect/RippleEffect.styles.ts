import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const circle = (delay: string) => ({
  '@keyframes growAndFade': {
    '0%': {
      opacity: '1',
      transform: 'scale(0.1)',
    },
    '100%': {
      opacity: '0',
      transform: 'scale(1)',
    },
  },

  border: `3px solid ${theme.palette.orange.main}`,
  animation: 'growAndFade 2s infinite ease',
  animationDelay: delay,
});

export const circleCenter = (delay: string) => ({
  '@keyframes growAndFade': {
    '0%': {
      opacity: '1',
      transform: 'scale(0.2)',
    },
    '50%': {
      opacity: '1',
      transform: 'scale(0.2)',
    },
    '100%': {
      opacity: '0',
      transform: 'scale(1)',
    },
  },
  border: `3px solid ${theme.palette.orange.main}`,
  animation: 'growAndFade 2s infinite ease',
  animationDelay: delay,
});

export const circles = (width: string, height: string): SxProps<Theme> => ({
  height: `${height}`,
  width: `${width}`,
  position: 'relative',
  '& div': {
    borderRadius: '50%',
    height: '100%',
    opacity: '0',
    position: 'absolute',
    width: '100%',
  },
});
