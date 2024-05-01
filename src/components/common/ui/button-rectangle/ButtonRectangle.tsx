import React, { FC, ReactNode } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './ButtonRectangle.styles';

interface ButtonRectangleProps {
  content: string | ReactNode;
  //first element in arr rightIcon & leftIcon - default icon for button
  //second element in arr rightIcon & leftIcon - icon for hover effect
  rightIcon?: [ReactNode?, ReactNode?];
  leftIcon?: [ReactNode?, ReactNode?];
  width: string;
  height?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const ButtonRectangle: FC<ButtonRectangleProps> = ({
  content,
  leftIcon,
  rightIcon,
  width,
  height = '80px',
  sx = {},
  onClick,
  ...rest
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.hidden}>
        <Box
          sx={mergeSx(styles.link(width, height), sx)}
          onClick={onClick}
          {...rest}
        >
          <Box sx={styles.proto}>
            {leftIcon && leftIcon[0]}
            <Typography sx={styles.text}>{content}</Typography>
            {rightIcon && rightIcon[0]}
          </Box>
          <Box sx={styles.hover}>
            {leftIcon && leftIcon[1] && leftIcon[1]}
            <Typography sx={styles.hoverText}>{content}</Typography>
            {rightIcon && rightIcon[1] && rightIcon[1]}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ButtonRectangle;
