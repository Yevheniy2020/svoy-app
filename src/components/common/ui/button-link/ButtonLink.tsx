import React, { FC, ReactNode } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './ButtonLink.styles';

interface ButtonProps {
  content: string | ReactNode;
  variant: 'circle' | 'rectangle';
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
    // <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={styles.wrapper}>
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
      {/*</Box>*/}
    </Box>
  );
};

export default ButtonLink;
