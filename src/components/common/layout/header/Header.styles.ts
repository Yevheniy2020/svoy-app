import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const wrapper = {
  background: theme.palette.body.main,
  position: 'relative',
  height: '70px',
  zIndex: '99999',
};

export const fixed = (
  scrollDirection: 'down' | 'up' | null,
): SxProps<Theme> => ({
  backgroundColor: theme.palette.body.main,
  width: '100%',
  position: 'fixed',
  top: scrollDirection === 'down' ? '-75px' : '0',
  left: '50%',
  transform: 'translateX(-50%)',
  transition: '0.5s all',
});
export const header = {
  maxWidth: '1440px',
  width: '100%',

  padding: '20px  25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.body.main,
  margin: '0 auto',
};

export const navigation = {
  display: 'flex',
  p: '0',
  gap: '32px',
};

export const text = {
  textTransform: 'uppercase',
  textWrap: 'nowrap',
  typography: theme.typography.h7SemiBold,
  color: theme.palette.dark.main,
  position: 'relative',

  '&::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    bottom: '-1px',
    left: '0',
    width: '0',
    height: '1px',
    backgroundColor: theme.palette.dark.main,
    transition: 'width .3s',
  },
};

export const button = {
  textAlign: 'center',
  p: '2px 0',
  '&:hover': {
    backgroundColor: 'transparent',
    '& p': {
      '&::after': { width: '100%' },
    },
  },
};

export const textLang = {
  ...text,
  mr: '4px',
};

export const item = {
  mr: '32px',
};
