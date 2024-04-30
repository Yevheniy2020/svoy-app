'use client';
import React, { FC, useEffect, useState } from 'react';
import { SxProps, Theme } from '@mui/material';

import ButtonCircle from '@/components/common/ui/button-circle';
import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './CursorCircle.styles';

interface CursorCircleProps {
  width: string;
  text: string;
  sx?: SxProps<Theme>;
  isTablet?: boolean;
}

const CursorCircle: FC<CursorCircleProps> = ({
  width = '0',
  text,
  sx = {},
  isTablet = false,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(width !== '0');
  }, [width]);

  useEffect(() => {
    if (!isTablet) {
      const updatePosition = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener('mousemove', updatePosition);
      return () => window.removeEventListener('mousemove', updatePosition);
    }
  }, [isTablet]);

  return (
    <ButtonCircle
      sx={mergeSx(styles.cursorTest(position.x, position.y), sx)}
      content={isActive && text}
      width={width}
    />
  );
};

export default CursorCircle;
