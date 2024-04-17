import React, { FC, ReactNode } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './ButtonLink.styles';

interface ButtonProps {
  content: string | ReactNode;
  variant: 'circle' | 'rectangle';
  rightIcon?: ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const ButtonLink: FC<ButtonProps> = ({
  content,
  variant,
  rightIcon,
  sx = {},
  onClick,
  ...rest
}) => {
  return (
    <Box sx={mergeSx(styles.link(variant), sx)} onClick={onClick} {...rest}>
      <Box sx={styles.container}>
        <Typography sx={styles.text(variant)}>{content}</Typography>
        <Box>{rightIcon}</Box>
      </Box>
    </Box>
  );
};

export default ButtonLink;
