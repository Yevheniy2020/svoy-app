import React, { FC, ReactNode } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './ButtonCircle.styles';

interface ButtonCircleProps {
  content: string | ReactNode;
  width: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
  hover?: boolean;
}
const ButtonCircle: FC<ButtonCircleProps> = ({
  content,
  width,
  sx = {},
  onClick,
  hover = false,
  ...rest
}) => {
  return (
    <Box
      sx={mergeSx(styles.link(width, hover), sx)}
      onClick={onClick}
      {...rest}
    >
      <Typography sx={styles.text}>{content}</Typography>
    </Box>
  );
};

export default ButtonCircle;
