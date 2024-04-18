import theme from '@/styles/theme/constants';

export const container = {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
};

export const part1 = {
  mt: '95px',
  display: 'flex',
  justifyContent: 'center',
  gap: '47px',
  typography: theme.typography.h1Regular,
};

export const part1Text = {
  typography: theme.typography.h1Regular,
  color: theme.palette.dark.main,
  transition: 'all .3s',
  position: 'relative',

  '&::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    bottom: '-1px',
    left: '0',
    width: '0',
    height: '6px',
    backgroundColor: theme.palette.orange.main,
    transition: 'width .3s',
  },

  '&:hover': {
    color: theme.palette.white.main,
    '-webkit-text-stroke': `2px ${theme.palette.dark.main}`,
    textStroke: `2px ${theme.palette.dark.main}`,
  },
  '&:hover::after': {
    width: '100%',
  },
};

export const part2 = {
  mt: '12px',
  display: 'flex',
  gap: '100px',
  alignItems: 'center',
};

export const part2Text = {
  typography: theme.typography.h1Regular,
};

export const part2Button = {
  width: '293px',
};

export const part3Button = {
  width: '310px',
  '&::before': {
    backgroundImage: 'none',
  },
  '& p': {
    backgroundImage: 'none',
    '-webkit-text-fill-color': theme.palette.dark.main,
    '-moz-text-fill-color': theme.palette.dark.main,
  },
  border: '2px solid',
  borderColor: theme.palette.dark.main,
};
