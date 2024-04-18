'use client';
import React, { FC } from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import Link from 'next/link';

import ArrowRightIcon from '@/components/common/icon/arrow-right';
import MainLogoIcon from '@/components/common/icon/main-logo';

import * as styles from './Header.styles';

const navItems = ['Catalog', 'BUY', 'SELL', 'BLOG', 'About', 'Contact'];

const Header: FC = () => {
  return (
    <Box sx={styles.header}>
      <Link href={'#'}>
        <MainLogoIcon />
      </Link>
      <List sx={styles.navigation}>
        <ListItem sx={styles.item} disablePadding>
          <ListItemButton sx={styles.button}>
            <Typography sx={styles.text}>for ukrainians</Typography>
          </ListItemButton>
        </ListItem>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={styles.button}>
              <Typography sx={styles.text}>{item}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={styles.button}>
            <Typography sx={styles.text}>EN</Typography>
            <ArrowRightIcon />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
