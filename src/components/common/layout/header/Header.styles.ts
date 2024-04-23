import theme from '@/styles/theme/constants';

export const wrapper = {
  background: theme.palette.body.main,
  position: 'relative',
  zIndex: '0',
};

export const header = {
  maxWidth: '1440px',
  padding: '0 9px 0 25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.body.main,
  margin: '0 auto',
};

export const navigation = {
  display: 'flex',
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
  gap: '8px',
  textAlign: 'center',

  '&:hover': {
    backgroundColor: 'transparent',
    '& p': {
      '&::after': { width: '100%' },
    },
  },
};

export const item = {
  mr: '32px',
};
