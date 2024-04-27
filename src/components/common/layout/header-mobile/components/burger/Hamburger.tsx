'use client';
import React, { FC } from 'react';
import { Box } from '@mui/material';

import * as styles from './Hamburger.styles';

interface HamburgerProps {
  isOpen: boolean;
  onClick?: () => void;
}
const Hamburger: FC<HamburgerProps> = ({ isOpen = false, onClick }) => {
  return (
    <Box onClick={onClick} sx={styles.border(isOpen)}>
      <Box sx={styles.line(isOpen)} />
    </Box>
  );
};

export default Hamburger;
