import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const link = (variant: 'circle' | 'rectangle'): SxProps<Theme> => ({
  cursor: 'pointer',
  position: 'relative',

  ...(variant === 'circle' && {
    width: '180px',
    height: '180px',
    borderRadius: '100px',
    background: theme.palette.orange.main,
  }),

  ...(variant === 'rectangle' && {
    height: '80px',
    background: 'white',
    margin: '5px',
    borderRadius: '100px',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '-1',
      margin: '-5px',
      borderRadius: 'inherit',
      backgroundImage:
        'linear-gradient(90deg, rgba(0,87,184,1) 0%, rgba(255,215,0,1) 100%)',
    },
  }),
});

export const container = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
};

export const text = (variant: 'circle' | 'rectangle'): SxProps<Theme> => ({
  textTransform: 'uppercase',
  typography: theme.typography.h6SemiBold,
  color: theme.palette.white.main,

  ...(variant === 'rectangle' && {
    backgroundImage:
      'linear-gradient(90deg, rgba(0,87,184,1) 0%, rgba(255,215,0,1) 100%)',

    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
  }),
});
