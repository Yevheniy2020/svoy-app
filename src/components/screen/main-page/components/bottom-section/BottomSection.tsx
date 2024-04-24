'use client';
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import ButtonMagnetic from '@/components/common/ui/button-magnetic/ButtonMagnetic';
import Container from '@/components/common/ui/container';

import * as styles from './BottomSection.styles';

const BottomSection: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Container>
        <Box sx={styles.left}>
          <Image
            src="/img/main/img2.jpg"
            width={533}
            height={691}
            alt={'the beautiful house'}
          />
          <Box sx={styles.img3}>
            <Image
              src="/img/main/img3.jpg"
              width={387}
              height={240}
              alt={'the beautiful house'}
            />
          </Box>
          <ButtonMagnetic
            width="180px"
            content="LEARN MORE"
            sx={styles.buttonCircle}
          />
          <Box sx={styles.right}>
            <Typography sx={styles.rightText1}>WHAT</Typography>
            <Typography sx={styles.rightText2}>we offer</Typography>
            <Typography sx={styles.rightText3}>
              Our architecture encourages co-existence. So does our business
              philosophy. We have abolished barriers of hierarchy and
              departmentalization to work as a single team. We believe in full
              transparency — and of course, that entails our clients.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BottomSection;
