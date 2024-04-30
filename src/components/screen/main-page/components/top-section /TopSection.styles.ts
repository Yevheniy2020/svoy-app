import theme from '@/styles/theme/constants';

export const wrapper = {
  background: theme.palette.body.main,
  position: 'relative',
  zIndex: '0',
};

export const part1 = {
  pt: { mobileSemiMedium: '43px', tablet: '92.45px' },

  display: 'flex',
  justifyContent: { mobileSemiMedium: 'space-between', mobileMedium: 'center' },

  position: 'relative',
  gap: { mobileSemiMedium: '0', mobileMedium: '45px' },
  typography: {
    mobileSemiMedium: theme.typography.h1RegularMobile,
    tablet: theme.typography.h2Regular,
    desktopSemiMedium: theme.typography.h1Regular,
  },
};

export const part1Relative = {
  position: 'relative',
};

export const part1Text = {
  typography: {
    mobileSemiMedium: theme.typography.h1RegularMobile,
    tablet: theme.typography.h2Regular,
    desktopSemiMedium: theme.typography.h1Regular,
  },
  pr: {
    mobileSemiMedium: '5px',
    tablet: '0',
  },
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
  // mt: '8px',
  mt: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: {
    mobileSemiMedium: 'space-between',
    mobileMedium: 'center',
    desktop: 'space-between',
  },
  gap: { mobileSemiMedium: '0', mobileMedium: '48px', desktop: '0' },
};

export const part2TextContainer = {
  display: 'flex',
  flexDirection: { mobileSemiMedium: 'column', desktop: 'row' },
  gap: { mobileSemiMedium: '7px', desktop: '46px' },
};
export const part2Text = {
  width: { mobileSemiMedium: 'min-content', desktop: 'auto' },
  typography: {
    mobileSemiMedium: theme.typography.h1RegularMobile,
    tablet: theme.typography.h2Regular,
    desktop: theme.typography.h2Regular,
    desktopSemiMedium: theme.typography.h1Regular,
  },
};

export const part3Text = {
  ...part2Text,
  width: 'max-content',
  pr: {
    mobileSemiMedium: '5px',
    tablet: '0',
  },
};

export const part2Button = {
  background: theme.palette.body.main,
};

export const part3 = {
  ...part2,
  justifyContent: 'space-between',
  gap: 0,
  flexDirection: {
    mobileSemiMedium: 'column',
    desktop: 'row',
  },
  alignItems: {
    mobileSemiMedium: 'center',
    desktop: 'start',
  },
  pb: { mobileSemiMedium: '85px', tablet: '132px' },
};
export const part3Center = {
  pb: { mobileSemiMedium: '25px', desktop: '0' },
  display: { mobileSemiMedium: 'flex', tablet: 'block' },
  flexDirection: 'column',
  alignItems: 'end',
};

export const buttonWrapper = {
  mt: '14px',
  mr: '2px',
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
  typography: {
    mobileSemiMedium: theme.typography.h7SemiBoldMobile,
    tablet: theme.typography.h6SemiBold,
  },
  color: theme.palette.dark.main,
  p: { mobileSemiMedium: '0 16px 0 0', tablet: '0 0 0 406px' },
};

export const img1 = {
  display: 'flex',
  position: 'relative',

  img: {
    objectFit: 'contain',
    width: '100% !important',
    height: 'unset !important',
  },
};

export const ripple = {
  position: 'absolute',
  top: '-78px',
  left: '50%',
  transform: 'translateX(-50%)',
};
