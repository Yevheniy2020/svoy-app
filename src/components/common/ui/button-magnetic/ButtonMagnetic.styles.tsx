import theme from '@/styles/theme/constants';

export const button = {
  cursor: 'pointer',
  background: 'transparent',
  border: `2px solid ${theme.palette.white.main}`,
  margin: '0',
  '&::before': {
    margin: '0',
    backgroundImage: 'none',
  },
  '&:hover': {
    '& p': {
      color: theme.palette.orange.main,
    },
  },
};
