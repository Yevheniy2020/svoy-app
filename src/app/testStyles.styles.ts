import { SxProps, Theme } from '@mui/material';

import theme from '@/styles/theme/constants';

export const test: SxProps<Theme> = {
  typography: theme.typography.h1Regular,
};

export const test2: SxProps<Theme> = {
  fontFamily: 'Tenor Sans',
  typography: theme.typography.h3Regular,
};
