import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const border = (isOpen: boolean): SxProps<Theme> => ({
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  border: `2px solid ${theme.palette.gray.main}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  transition: '0.3s all',

  backgroundColor: isOpen ? theme.palette.dark.main : 'transparent',
});

export const line = (isOpen: boolean): SxProps<Theme> => ({
  width: '17.5px',
  height: '1px',
  transition: '0.3s all',

  backgroundColor: isOpen ? 'none' : theme.palette.dark.main,
  position: 'relative',
  borderRadius: '100px',

  '&::after': {
    content: "''",
    display: 'block',
    width: '17.5px',
    height: '1px',
    backgroundColor: isOpen
      ? theme.palette.white.main
      : theme.palette.dark.main,
    position: 'absolute',
    bottom: isOpen ? '0' : '-5px',
    left: '0',
    borderRadius: '100px',
    transition: '0.3s all',
    transform: isOpen ? 'rotate(-45deg)' : '0',
  },

  '&::before': {
    content: "''",
    display: 'block',
    width: '17.5px',
    height: '1px',
    backgroundColor: isOpen
      ? theme.palette.white.main
      : theme.palette.dark.main,
    position: 'absolute',
    top: isOpen ? '0' : '-5px',
    left: '0',
    borderRadius: '100px',
    transition: '0.3s all',
    transform: isOpen ? 'rotate(45deg)' : '0',
  },
});
