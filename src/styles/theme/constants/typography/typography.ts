import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Commissioner, Tenor_Sans } from 'next/font/google';

export const tenorSansFont = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const commissionerFont = Commissioner({
  subsets: ['latin'],
  display: 'swap',
});

const typography: TypographyOptions = {
  fontFamily: [
    `${tenorSansFont.style.fontFamily}`,
    `${commissionerFont.style.fontFamily}`,
  ].join(','),
  decorRegular: {
    fontFamily: tenorSansFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 120,
    lineHeight: 1,
    letterSpacing: 0.5,
  },
  h1Regular: {
    fontFamily: tenorSansFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 115,
    lineHeight: 1,
    // letterSpacing: 0.3,
    letterSpacing: 3,
  },
  h2Regular: {
    fontFamily: tenorSansFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 100,
    lineHeight: 1,
    letterSpacing: 3,
  },
  h3Regular: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 35,
    lineHeight: 1,
    letterSpacing: 0,
  },
  h4Regular: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h5Regular: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h6SemiBold: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 1.3,
    letterSpacing: 0.8,
  },
  h7SemiBold: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 1.3,
    letterSpacing: 1.1,
  },
  bodyHugeMedium: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  bodyRegular: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  bodySmallRegular: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  descrRegular: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1.3,
    letterSpacing: 1,
  },
  detailsRegular: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 1.3,
    letterSpacing: 1,
  },

  h1RegularMobile: {
    fontFamily: tenorSansFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 55,
    lineHeight: 1,
    letterSpacing: 0.3,
  },
  h2RegularMobile: {
    fontFamily: tenorSansFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 50,
    lineHeight: 1,
    letterSpacing: 0.3,
  },
  h3RegularMobile: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 35,
    fontSize: 35,
    lineHeight: 1,
    letterSpacing: 0,
  },
  h4RegularMobile: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h5RegularMobile: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h6SemiBoldMobile: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 1.3,
    letterSpacing: 1,
  },
  h7SemiBoldMobile: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 1.3,
    letterSpacing: 1,
  },
  bodyRegularMobile: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  bodySmallRegularMobile: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  detailsRegularMobile: {
    fontFamily: commissionerFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  decorRegularMobile: {
    fontFamily: tenorSansFont.style.fontFamily,
    fontWeight: 400,
    fontSize: 70,
    lineHeight: 1.3,
    letterSpacing: 3,
  },
};

export default typography;
