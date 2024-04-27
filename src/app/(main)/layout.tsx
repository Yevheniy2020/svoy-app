'use client';
import React from 'react';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/system';

import Header from '@/components/common/layout/header';
import HeaderMobile from '@/components/common/layout/header-mobile';
import theme from '@/styles/theme/constants';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isDownDesktop = useMediaQuery(theme.breakpoints.down('desktop'));

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {isDownDesktop ? <HeaderMobile /> : <Header />}
      {children}
    </Box>
  );
};

export default MainLayout;
