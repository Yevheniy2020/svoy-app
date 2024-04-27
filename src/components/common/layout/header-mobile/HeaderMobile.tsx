'use client';
import React, { FC, useState } from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';

import CallIcon from '@/components/common/icon/call';
import MainLogoIcon from '@/components/common/icon/main-logo';
import Hamburger from '@/components/common/layout/header-mobile/components/burger';

import * as styles from './HeaderMobile.styles';

const navItems = [
  'for ukrainians',
  'Catalog',
  'BUY',
  'SELL',
  'BLOG',
  'About',
  'SERVICES',
  'Contact',
];

const HeaderMobile: FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.callBorder}>
          <CallIcon />
        </Box>
        <Box sx={styles.logoBorder}>
          <MainLogoIcon />
        </Box>
        <Hamburger
          onClick={() => {
            setIsHamburgerOpen(!isHamburgerOpen);
          }}
          isOpen={isHamburgerOpen}
        />
      </Box>
      <Box sx={styles.menu(isHamburgerOpen)}>
        <List sx={styles.list}>
          {navItems.map(item => (
            <ListItem key={item} disablePadding>
              <ListItemButton disableRipple sx={styles.button}>
                <Typography sx={styles.text}>{item}</Typography>
                <Box sx={styles.line} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={styles.languages}>
          <Typography sx={styles.textActive}>ENG</Typography>
          <Typography sx={styles.text}>RU</Typography>
          <Typography sx={styles.text}>UA</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMobile;
