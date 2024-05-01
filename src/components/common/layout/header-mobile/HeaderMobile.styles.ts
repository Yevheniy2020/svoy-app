import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const wrapper = {
  position: 'relative',
  width: '100%',
  backgroundColor: theme.palette.body.main,
};
export const container = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: '15px 16px',
};

export const callBorder = {
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  border: `2px solid ${theme.palette.gray.main}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
};

export const logoBorder = {
  cursor: 'pointer',
  width: '117px',
  height: '50px',
  border: `2px solid ${theme.palette.gray.main}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100px',
};

export const menu = (isHamburgerOpen: boolean): SxProps<Theme> => ({
  display: isHamburgerOpen ? 'block' : 'none',
  pt: '17px',
  transition: '3s all',
});
export const list = { p: '0' };

export const line = {
  width: '100%',
  height: '1px',
  backgroundColor: theme.palette.dark.main,
  opacity: '0.2',
};
export const button = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '20px',
  p: '0',
  pt: '20px',

  '&:hover': {
    backgroundColor: 'transparent',
    '& p': {
      '&::after': { width: '100%' },
    },
  },
};
export const text = {
  textTransform: 'uppercase',
  textWrap: 'nowrap',
  typography: theme.typography.h6SemiBoldMobile,
  color: theme.palette.dark.main,
  position: 'relative',
};

export const languages = {
  p: '62px 0 21px 0',
  display: 'flex',
  gap: '32px',
  justifyContent: 'center',
  alignItems: 'center',
};

export const textActive = {
  ...text,
  color: theme.palette.dark.main,
  opacity: '0.2',
};
