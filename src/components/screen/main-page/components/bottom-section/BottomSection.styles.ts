import theme from '@/styles/theme/constants';

export const wrapper = {
  background: theme.palette.orange.main,
  pb: { mobileSemiMedium: '59px', desktop: '133px' },
  position: 'relative',
  zIndex: '0',
};

export const left = {
  position: 'relative',
  width: { mobileMedium: '100%', tablet: '543px' },
  pt: { mobileSemiMedium: '80px', mobileMedium: '0' },
};

export const leftPosition = {
  position: 'relative',
  img: {
    maxWidth: { mobileSemiMedium: '400px', desktop: '100%' },
    height: 'unset',
  },
};

export const img2 = {
  img: { width: { mobileSemiMedium: '262px', mobileMedium: '100%' } },
};
export const img3 = {
  position: 'absolute',
  bottom: '-59px',
  right: { mobileSemiMedium: '0', tablet: '-148px' },
  img: { width: { mobileSemiMedium: '212px', mobileMedium: '387px' } },
};

export const buttonCircle = {
  position: 'absolute',
  bottom: '-10px',
  right: '-90px',
};

export const right = {
  width: '561px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  position: 'absolute',
  top: '151px',
  right: { desktop: '-42vw', desktopSemiMedium: '-575px' },
};
export const rightText1 = {
  mr: { desktop: '0', desktopSemiMedium: '101px' },

  textTransform: 'uppercase',
  typography: theme.typography.h2Regular,

  color: theme.palette.white.main,
  textWrap: 'nowrap',
};
export const rightText2 = {
  pt: '20px',
  mr: { desktop: '0', desktopSemiMedium: '57px' },

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

export const rightText1Hidden = {
  pl: '27px',
  position: 'relative',
  zIndex: '10',
  textTransform: 'uppercase',
  typography: {
    mobileSemiMedium: theme.typography.h2RegularMobile,
    tablet: theme.typography.h2Regular,
  },
  color: theme.palette.white.main,
  textWrap: 'nowrap',
};

export const rightText2Hidden = {
  pl: '27px',
  textTransform: 'uppercase',
  typography: {
    mobileSemiMedium: theme.typography.h2RegularMobile,
    tablet: theme.typography.h2Regular,
  },
  color: theme.palette.white.main,
  textWrap: 'nowrap',
};

export const rightText3Hidden = {
  typography: {
    mobileSemiMedium: theme.typography.bodyRegularMobile,
    tablet: theme.typography.bodyRegular,
  },
  color: theme.palette.white.main,
  padding: '24px 26px 0 26px',
};

export const buttonCircleHidden = {
  display: 'flex',
  justifyContent: 'center',
  mt: '59px',
};
