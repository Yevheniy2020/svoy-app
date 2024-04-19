import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const wrapper = {
  display: 'flex',
  alignItems: 'center',
};

export const hidden = {
  overflow: 'hidden',
  borderRadius: '100px',
};

export const hoverText = {
  textTransform: 'uppercase',
  typography: theme.typography.h6SemiBold,
  color: theme.palette.white.main,
};

export const link = (
  variant: 'circle' | 'rectangle',
  width: string,
  height: string,
): SxProps<Theme> => ({
  cursor: 'pointer',
  position: 'relative',
  svg: {
    display: 'flex',
  },

  ...(variant === 'circle' && {
    width: '180px',
    height: '180px',
    borderRadius: '100px',
    background: theme.palette.orange.main,
  }),

  ...(variant === 'rectangle' && {
    //due to margin which need gradient
    height: `calc(${height} - 4px)`,
    width: `calc(${width} - 4px)`,
    background: 'white',
    margin: '2px',
    borderRadius: '100px',
    //gradient for hover
    '&::after': {
      content: "''",
      position: 'absolute',
      right: '50%',
      transform: 'translateX(50%)',
      bottom: `calc(-${width} - 5px)`,
      width: `${width}`,
      height: `${width}`,
      zIndex: '0',
      transition: 'bottom .5s',
      borderRadius: '100%',
      background: theme.palette.gradient.main,
    },
    //gradient for border
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '-1',
      margin: '-2px',
      borderRadius: 'inherit',
      backgroundImage: theme.palette.gradient.main,
    },
    '&:hover::after': {
      bottom: `calc(-${width} / 2.65)`,
    },
    '&:hover': {
      '& div': {
        opacity: '1',
        gap: '12px',
      },
    },
  }),
});

export const proto = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
};
export const hover = {
  position: 'absolute',
  zIndex: '2',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  opacity: '0',
  textWrap: 'nowrap',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'opacity .6s, gap .3s',
  gap: '0px',
};

export const text = (variant: 'circle' | 'rectangle'): SxProps<Theme> => ({
  textTransform: 'uppercase',
  typography: theme.typography.h6SemiBold,
  color: theme.palette.white.main,
  //gradient text
  ...(variant === 'rectangle' && {
    backgroundImage: theme.palette.gradient.main,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
  }),
});
