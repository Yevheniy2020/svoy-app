import React, { FC, MutableRefObject, ReactNode } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSxStyles';

import * as styles from './ButtonCircle.styles';

export interface ButtonCircleProps {
  content: string | ReactNode;
  width: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
  hover?: boolean;
  buttonRef?: MutableRefObject<HTMLElement | null>;
}
const ButtonCircle: FC<ButtonCircleProps> = ({
  content,
  width,
  sx = {},
  onClick,
  hover = false,
  buttonRef,
  ...rest
}) => {
  return (
    <Box
      sx={mergeSx(styles.link(width, hover), sx)}
      onClick={onClick}
      ref={buttonRef}
      {...rest}
    >
      <Typography sx={styles.text}>{content}</Typography>
    </Box>
  );
};

export default ButtonCircle;
