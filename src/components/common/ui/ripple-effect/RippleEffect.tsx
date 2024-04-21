'use client';
import React, { FC } from 'react';
import { Box } from '@mui/material';

import * as styles from './RippleEffect.styles';

interface RippleEffectProps {
  width?: string;
  height?: string;
  delay?: [string?, string?, string?];
}
const RippleEffect: FC<RippleEffectProps> = ({
  width = '200px',
  height = '200px',
  delay = [],
}) => {
  return (
    <Box sx={styles.circles(width, height)}>
      <Box sx={styles.circle(delay[0] || '3.1s')} />
      <Box sx={styles.circle(delay[1] || '3s')} />
      <Box sx={styles.circleCenter(delay[2] || '3.3s')} />
    </Box>
  );
};

export default RippleEffect;
