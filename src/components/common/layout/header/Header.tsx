'use client';
import React, { FC } from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import Link from 'next/link';

import ArrowBottomIcon from '@/components/common/icon/arrow-bottom';
import MainLogoIcon from '@/components/common/icon/main-logo';
import useScrollDirection from '@/lib/use-scroll-direction/useScrollDirection';

import * as styles from './Header.styles';

const navItems = [
  'Catalog',
  'BUY',
  'SELL',
  'BLOG',
  'About',
  'SERVICES',
  'Contact',
];

const Header: FC = () => {
  const scrollDirection = useScrollDirection();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.header(scrollDirection)}>
        <Link href={'#'}>
          {/*break pixel perfect*/}
          <MainLogoIcon />
        </Link>
        <List sx={styles.navigation}>
          <ListItem sx={styles.item} disablePadding>
            <ListItemButton disableRipple sx={styles.button}>
              <Typography sx={styles.text}>for ukrainians</Typography>
            </ListItemButton>
          </ListItem>
          {navItems.map(item => (
            <ListItem key={item} disablePadding>
              <ListItemButton disableRipple sx={styles.button}>
                <Typography sx={styles.text}>{item}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton disableRipple sx={styles.button}>
              <Typography sx={styles.textLang}>ENG</Typography>
              {/*break pixel perfect*/}
              <ArrowBottomIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Header;
