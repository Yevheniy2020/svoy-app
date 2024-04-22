'use client';
import React, { FC, useEffect, useState } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './CursorCircle.styles';

interface CursorCircleProps {
  width: string;
  height: string;
  text: string;
  sx?: SxProps<Theme>;
}

const CursorCircle: FC<CursorCircleProps> = ({
  width = '0',
  height = '0',
  text,
  sx = {},
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(width !== '0' && height !== '0');
  }, [width, height]);

  useEffect(() => {
    const updatePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <Box sx={mergeSx(styles.cursor(position.x, position.y, width, height), sx)}>
      {isActive && <Typography sx={styles.text}>{text}</Typography>}
    </Box>
  );
};

export default CursorCircle;
