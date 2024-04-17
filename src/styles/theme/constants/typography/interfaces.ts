import { CSSProperties } from 'react';

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    decorRegular: CSSProperties;
    h1Regular: CSSProperties;
    h2Regular: CSSProperties;
    h3Regular: CSSProperties;
    h4Regular: CSSProperties;
    h5Regular: CSSProperties;
    h6SemiBold: CSSProperties;
    h7SemiBold: CSSProperties;
    bodyHugeMedium: CSSProperties;
    bodyRegular: CSSProperties;
    bodySmallRegular: CSSProperties;
    descrRegular: CSSProperties;
    detailsRegular: CSSProperties;

    h1RegularMobile: CSSProperties;
    h2RegularMobile: CSSProperties;
    h3RegularMobile: CSSProperties;
    h4RegularMobile: CSSProperties;
    h5RegularMobile: CSSProperties;
    h6SemiBoldMobile: CSSProperties;
    h7SemiBoldMobile: CSSProperties;
    bodyRegularMobile: CSSProperties;
    bodySmallRegularMobile: CSSProperties;
    detailsRegularMobile: CSSProperties;
    decorRegularMobile: CSSProperties;
  }

  interface TypographyVariantsOptions {
    decorRegular?: CSSProperties;
    h1Regular?: CSSProperties;
    h2Regular?: CSSProperties;
    h3Regular?: CSSProperties;
    h4Regular?: CSSProperties;
    h5Regular?: CSSProperties;
    h6SemiBold?: CSSProperties;
    h7SemiBold?: CSSProperties;
    bodyHugeMedium?: CSSProperties;
    bodyRegular?: CSSProperties;
    bodySmallRegular?: CSSProperties;
    descrRegular?: CSSProperties;
    detailsRegular?: CSSProperties;

    h1RegularMobile?: CSSProperties;
    h2RegularMobile?: CSSProperties;
    h3RegularMobile?: CSSProperties;
    h4RegularMobile?: CSSProperties;
    h5RegularMobile?: CSSProperties;
    h6SemiBoldMobile?: CSSProperties;
    h7SemiBoldMobile?: CSSProperties;
    bodyRegularMobile?: CSSProperties;
    bodySmallRegularMobile?: CSSProperties;
    detailsRegularMobile?: CSSProperties;
    decorRegularMobile?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    decorRegular: false;
    h1Regular: false;
    h2Regular: false;
    h3Regular: false;
    h4Regular: false;
    h5Regular: false;
    h6SemiBold: false;
    h7SemiBold: false;
    bodyHugeMedium: false;
    bodyRegular: false;
    bodySmallRegular: false;
    descrRegular: false;
    detailsRegular: false;

    h1RegularMobile: false;
    h2RegularMobile: false;
    h3RegularMobile: false;
    h4RegularMobile: false;
    h5RegularMobile: false;
    h6SemiBoldMobile: false;
    h7SemiBoldMobile: false;
    bodyRegularMobile: false;
    bodySmallRegularMobile: false;
    detailsRegularMobile?: false;
    decorRegularMobile?: false;
  }
}
