import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const cursor = (
  left: number,
  top: number,
  width: string,
  height: string,
): SxProps<Theme> => ({
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: '1',
  transform: 'translate(-50%, -50%)',
  left: `${left}px`,
  top: `${top}px`,
  transition: 'width 0.5s, height 0.5s',

  width: `${width}`,
  height: `${height}`,
  borderRadius: '100px',
  background: theme.palette.orange.main,
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
  transition: 'all 2s',
};

export const cursorTest = (left: number, top: number): SxProps<Theme> => ({
  background: theme.palette.orange.main,
  margin: '0',
  '&::before': {
    margin: '0',
    backgroundImage: 'none',
  },
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: '1',
  transform: 'translate(-50%, -50%)',
  left: `${left}px`,
  top: `${top}px`,
  transition: 'width 0.5s, height 0.5s',
});
