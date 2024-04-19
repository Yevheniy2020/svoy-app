'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

import ArrowRightIcon from '@/components/common/icon/arrow-right';
import ArrowRightWhiteIcon from '@/components/common/icon/arrow-right-white';
import TridentIcon from '@/components/common/icon/trident';
import ButtonLink from '@/components/common/ui/button-link';

import * as styles from './Home.styles';

export default function Home() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.part1}>
        <Typography sx={styles.part1Text}>RENT</Typography>/
        <Typography sx={styles.part1Text}>BUY</Typography>
      </Box>
      <Box sx={styles.part2}>
        <ButtonLink
          sx={styles.part2Button}
          content="SUPPORT UKRAINE"
          width={'293px'}
          variant="rectangle"
          //leftIcon={<ArrowRightIcon />}
          leftIcon={[, <TridentIcon key={0} />]}
        />
        <Typography sx={styles.part2Text}>REAL ESTATE</Typography>
      </Box>
      <Box sx={styles.part2}>
        <Typography sx={styles.part2Text}>WITH SVOY</Typography>
        <ButtonLink
          sx={styles.part3Button}
          content="WHOLE COLLECTION"
          width={'310px'}
          variant="rectangle"
          rightIcon={[
            <ArrowRightIcon key={0} />,

            <ArrowRightWhiteIcon key={1} />,
          ]}
        />
      </Box>
    </Box>
  );
}
