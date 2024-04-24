import theme from '@/styles/theme/constants';

export const button1 = {
  background: theme.palette.body.main,
};
export const button2 = {
  background: theme.palette.orange.main,
  margin: '0',
  '&::before': {
    margin: '0',
    backgroundImage: 'none',
  },
};

export const button3 = {
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
