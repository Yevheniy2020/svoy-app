'use client';
import React, { FC, useCallback, useRef, useState } from 'react';
import { Box } from '@mui/material';

import ButtonCircle from '@/components/common/ui/button-circle';
import { ButtonCircleProps } from '@/components/common/ui/button-circle/ButtonCircle';
import mergeSxStyles from '@/lib/utils/mergeSxStyles';

import * as styles from './ButtonMagnetic.styles';

//make a component that is a wrapper over another component.
export type ButtonMagneticProps = Omit<ButtonCircleProps, 'buttonRef'> & {
  isTablet?: boolean;
};
const MagneticButton: FC<ButtonMagneticProps> = ({
  content,
  width,
  sx = {},
  onClick,
  hover = true,
  isTablet,
  ...rest
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [childStyle, setChildStyle] = useState({});

  //handles doesn't work if isTablet true
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!isTablet) {
        const pos = ref.current && ref.current.getBoundingClientRect();
        const mx = pos ? event.clientX - pos.left - pos.width / 2 : 0;
        const my = pos ? event.clientY - pos.top - pos.height / 2 : 0;

        setChildStyle({
          transition: 'all 0.2s',
          transform: `translate(${mx * 0.15}px, ${my * 0.45}px)`,
          '& p': {
            transition: 'all 0.2s',
            transform: `translate(calc(-50% + ${mx * 0.15}px), calc(-50% + ${my * 0.3}px)) rotate3d(${mx * -0.1}, ${my * -0.3}, 0, 12deg)`,
          },
        });
      }
    },
    [isTablet],
  );

  const handleMouseLeave = useCallback(() => {
    if (!isTablet) {
      setChildStyle({
        transition: 'all 0.4s',
        transform: 'translate3d(0px, 0px, 0px)',
        '& p': {
          transition: 'all 0.4s',
          transform: 'translate3d(-50%,-50%, 0px) rotate3d(0, 0, 0, 0deg)',
        },
      });
    }
  }, [isTablet]);

  return (
    <Box onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} sx={sx}>
      <ButtonCircle
        sx={mergeSxStyles(styles.button, childStyle)}
        hover={hover}
        onClick={onClick}
        content={content}
        width={width}
        buttonRef={ref}
        {...rest}
      />
    </Box>
  );
};

export default MagneticButton;
