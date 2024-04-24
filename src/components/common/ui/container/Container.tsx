import React, { FC } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './Container.styles';

interface ContainerProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}
const Container: FC<ContainerProps> = ({ children, sx = {} }) => {
  return <Box sx={mergeSx(styles.container, sx)}>{children}</Box>;
};
export default Container;
