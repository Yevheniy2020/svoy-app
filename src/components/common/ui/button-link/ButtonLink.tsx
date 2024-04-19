import React, { FC, ReactNode } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './ButtonLink.styles';

interface ButtonProps {
  content: string | ReactNode;
  //if there are more variant need use enum
  variant: 'circle' | 'rectangle';
  //first icon - default icon for button
  //second icon - icon for hover effect
  rightIcon?: [ReactNode?, ReactNode?];
  leftIcon?: [ReactNode?, ReactNode?];
  width: string;
  height?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const ButtonLink: FC<ButtonProps> = ({
  content,
  variant,
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
          sx={mergeSx(styles.link(variant, width, height), sx)}
          onClick={onClick}
          {...rest}
        >
          <Box sx={styles.proto}>
            {leftIcon && <Box>{leftIcon[0]}</Box>}
            <Typography sx={styles.text(variant)}>{content}</Typography>
            {rightIcon && <Box>{rightIcon[0]}</Box>}
          </Box>
          <Box sx={styles.hover}>
            {leftIcon && leftIcon[1] && <Box>{leftIcon[1]}</Box>}
            <Typography sx={styles.hoverText}>{content}</Typography>
            {rightIcon && rightIcon[1] && <Box>{rightIcon[1]}</Box>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ButtonLink;
