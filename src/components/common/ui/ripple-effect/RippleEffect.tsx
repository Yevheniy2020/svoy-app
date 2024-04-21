'use client';
import React, { FC } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './RippleEffect.styles';

interface RippleEffectProps {
  width?: string;
  height?: string;
  sx?: SxProps<Theme>;
  delay?: [string?, string?, string?];
}
const RippleEffect: FC<RippleEffectProps> = ({
  width = '200px',
  height = '200px',
  delay = [],
  sx = {},
  ...rest
}) => {
  return (
    <Box sx={mergeSx(styles.circles(width, height), sx)} {...rest}>
      <Box sx={styles.circle(delay[0] || '1.1s')} />
      <Box sx={styles.circle(delay[1] || '1s')} />
      <Box sx={styles.circleCenter(delay[2] || '1.3s')} />
    </Box>
  );
};

export default RippleEffect;
