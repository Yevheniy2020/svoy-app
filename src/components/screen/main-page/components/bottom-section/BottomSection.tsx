'use client';
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/system';
import Image from 'next/image';

import ButtonMagnetic from '@/components/common/ui/button-magnetic/ButtonMagnetic';
import Container from '@/components/common/ui/container';
import theme from '@/styles/theme/constants';

import * as styles from './BottomSection.styles';

const BottomSection: FC = () => {
  const isDownDesktop = useMediaQuery(theme.breakpoints.down('desktop'));

  return (
    <Box sx={styles.wrapper}>
      <Container>
        <Box sx={styles.left}>
          <Box sx={styles.leftPosition}>
            <Box sx={styles.img2}>
              <Image
                src="/img/main/img2.jpg"
                width={533}
                height={691}
                alt={'the beautiful house'}
              />
            </Box>

            <Box sx={styles.img3}>
              <Image
                src="/img/main/img3.jpg"
                width={387}
                height={240}
                alt={'the beautiful house'}
              />
              {!isDownDesktop && (
                <ButtonMagnetic
                  width="180px"
                  content="LEARN MORE"
                  sx={styles.buttonCircle}
                />
              )}
            </Box>
          </Box>
          {!isDownDesktop && (
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
          )}
        </Box>
        {isDownDesktop && (
          <Box>
            <Typography sx={styles.rightText1Hidden}>WHAT</Typography>
            <Typography sx={styles.rightText2Hidden}>we offer</Typography>
            <Typography sx={styles.rightText3Hidden}>
              Our architecture encourages co-existence. So does our business
              philosophy. We have abolished barriers of hierarchy and
              departmentalization to work as a single team. We believe in full
              transparency — and of course, that entails our clients.
            </Typography>
            <ButtonMagnetic
              width="180px"
              content="LEARN MORE"
              sx={styles.buttonCircleHidden}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default BottomSection;
