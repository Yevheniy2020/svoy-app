import theme from '@/styles/theme/constants';

export const wrapper = {
  background: theme.palette.body.main,
  position: 'relative',
  zIndex: '0',
};

export const part1 = {
  pt: '91.45px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  gap: '45px',
  typography: theme.typography.h1Regular,
};

export const part1Relative = {
  position: 'relative',
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
    cursor: 'none',
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
  background: theme.palette.body.main,
};

export const part3 = {
  ...part2,
  justifyContent: 'space-between',
  alignItems: 'start',
};

export const buttonWrapper = {
  mt: '14px',
  mr: '5px',
};

export const part3Button = {
  background: theme.palette.body.main,

  '&::before': {
    backgroundImage: 'none',
  },
  '& p': {
    backgroundImage: 'none',
    '-webkit-text-fill-color': theme.palette.dark.main,
    '-moz-text-fill-color': theme.palette.dark.main,
  },
  '&:hover': {
    '& p': {
      '-webkit-text-fill-color': theme.palette.white.main,
      '-moz-text-fill-color': theme.palette.white.main,
    },
  },
  '&::after': {
    background: `${theme.palette.orange.main}`,
  },

  outline: '2px solid',
  borderColor: theme.palette.dark.main,
};

export const part4Text = {
  textTransform: 'uppercase',
  typography: theme.typography.h6SemiBold,
  color: theme.palette.dark.main,
  pl: '406px',
  pb: '132px',
};

export const img1 = {
  display: 'flex',
  position: 'relative',
};

export const ripple = {
  position: 'absolute',
  top: '-80px',
  left: '50%',
  transform: 'translateX(-52%)',
};
