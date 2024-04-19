import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const link = (width: string, hover: boolean): SxProps<Theme> => ({
  width: `${width}`,
  height: `${width}`,
  borderRadius: '100px',
  background: theme.palette.white.main,
  position: 'relative',
  m: '2px',

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

  //circle for animation
  '&::after': {
    content: "''",
    width: '0',
    height: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '1',
    transform: 'translate(-50%,-50%)',
    borderRadius: 'inherit',
    background: theme.palette.white.main,
    transition: 'all 0.3s',
  },

  ...(hover === true && {
    '&:hover': {
      '&::after': {
        width: `calc(${width} + 10px)`,
        height: `calc(${width} + 10px)`,
      },
      '& p': {
        color: theme.palette.dark.main,
      },
    },
  }),
});

export const text = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: '2',
  transform: 'translate(-50%,-50%)',
  textWrap: 'nowrap',
  textTransform: 'uppercase',
  typography: theme.typography.h6SemiBold,
  color: theme.palette.white.main,
  transition: 'all 0.3s',
};
