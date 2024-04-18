import theme from '@/styles/theme/constants';

export const header = {
  maxWidth: '1440px',
  padding: '0 9px 0 25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.body.main,
};

export const navigation = {
  display: 'flex',
};

export const text = {
  textTransform: 'uppercase',
  textWrap: 'nowrap',
  typography: theme.typography.h7SemiBold,
  color: theme.palette.dark.main,
};

export const button = {
  gap: '8px',
  textAlign: 'center',
};

export const item = {
  mr: '32px',
};
