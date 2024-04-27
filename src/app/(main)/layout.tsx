import React from 'react';
import { Box } from '@mui/material';

import Header from '@/components/common/layout/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Header />
      {children}
    </Box>
  );
};

export default MainLayout;
