import theme from '@/styles/theme/constants';

export const button = {
  '&::before': {
    backgroundImage: 'none',
  },
  '& p': {
    backgroundImage: 'none',
    WebkitTextFillColor: theme.palette.dark.main,
    MozTextFillColor: theme.palette.dark.main,
  },
  '&:hover': {
    '& p': {
      WebkitTextFillColor: theme.palette.white.main,
      MozTextFillColor: theme.palette.white.main,
    },
  },
  '&::after': {
    background: `${theme.palette.orange.main}`,
  },

  outline: '2px solid',
  borderColor: theme.palette.dark.main,
};
