import theme from '@/styles/theme/constants';

export const wrapperTop = {
  background: theme.palette.body.main,
  position: 'relative',
  zIndex: '0',
};

export const wrapperBottom = {
  background: theme.palette.orange.main,
  pb: '133px',
  position: 'relative',
  zIndex: '0',
};
export const container = {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
};

export const part1 = {
  pt: '95px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  gap: '47px',
  typography: theme.typography.h1Regular,
};

export const part1Relative = {
  position: 'relative',
};

export const part1Circle = {
  position: 'absolute',
  left: '30px',
  top: '-100px',
  background: theme.palette.orange.main,
  margin: '0',
  '&::before': {
    margin: '0',
    backgroundImage: 'none',
  },
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

export const part3Button = {
  mt: '2px',
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

  border: '2px solid',
  borderColor: theme.palette.dark.main,
};

export const part4Text = {
  textTransform: 'uppercase',
  typography: theme.typography.h6SemiBold,
  color: theme.palette.dark.main,
  pl: '454px',
};

export const img1 = {
  display: 'flex',
  pt: '133px',
  position: 'relative',
};

export const ripple = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

export const img3 = {
  position: 'absolute',
  bottom: '-59px',
  right: '-158px',
};

export const left = {
  position: 'relative',
  width: '543px',
};

export const flex = {
  // display: 'flex',
  // gap: '247px',
};

export const buttonCircle = {
  position: 'absolute',
  bottom: '-76px',
  right: '-259px',

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

export const right = {
  width: '561px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  position: 'absolute',
  top: '150px',
  right: '-534px',
};
export const rightText1 = {
  mr: '57px',
  textTransform: 'uppercase',
  typography: theme.typography.h2Regular,
  color: theme.palette.white.main,
  textWrap: 'nowrap',
};
export const rightText2 = {
  pt: '20px',
  mr: '57px',
  textTransform: 'uppercase',
  typography: theme.typography.h2Regular,
  color: theme.palette.white.main,
  textWrap: 'nowrap',
};
export const rightText3 = {
  pt: '43px',
  maxWidth: '306px',
  typography: theme.typography.bodyRegular,
  color: theme.palette.white.main,
};
