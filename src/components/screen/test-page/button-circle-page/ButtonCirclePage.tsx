'use client';
import React from 'react';
import { Box } from '@mui/material';

import TridentGradientIcon from '@/components/common/icon/trident-gradient';
import ButtonCircle from '@/components/common/ui/button-circle';
import theme from '@/styles/theme/constants';

import * as styles from './ButtonCirclePage.styles';

const ButtonCirclePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '100px',
        justifyContent: 'center',
        mt: '20px',
        backgroundColor: theme.palette.body.main,
        position: 'relative',
        zIndex: '0',
      }}
    >
      <ButtonCircle
        sx={styles.button1}
        content={<TridentGradientIcon />}
        width="100px"
      />
      <ButtonCircle sx={styles.button2} content={'EXPLORE'} width="180px" />
      <ButtonCircle
        sx={styles.button3}
        hover={true}
        content={'LEARN MORE'}
        width="180px"
      />
    </Box>
  );
};

export default ButtonCirclePage;
