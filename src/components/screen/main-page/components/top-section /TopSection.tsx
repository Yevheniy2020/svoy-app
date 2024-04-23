'use client';
import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import ArrowRightIcon from '@/components/common/icon/arrow-right';
import ArrowRightWhiteIcon from '@/components/common/icon/arrow-right-white';
import TridentIcon from '@/components/common/icon/trident';
import ButtonRectangle from '@/components/common/ui/button-rectangle';
import Container from '@/components/common/ui/container';
import CursorCircle from '@/components/common/ui/cursor-cirlce';
import RippleEffect from '@/components/common/ui/ripple-effect';

import * as styles from './TopSection.styles';

const TopSection: FC = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box sx={styles.wrapper}>
      <Container>
        <Box sx={styles.part1}>
          <Box sx={styles.part1Relative}>
            <Typography
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              sx={styles.part1Text}
            >
              RENT
            </Typography>
          </Box>
          /
          <Typography
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            sx={styles.part1Text}
          >
            BUY
          </Typography>
          <CursorCircle text="EXPLORE" width={isHover ? `180px` : '0'} />
        </Box>
        <Box sx={styles.part2}>
          <ButtonRectangle
            sx={styles.part2Button}
            content="SUPPORT UKRAINE"
            width={'293px'}
            leftIcon={[undefined, <TridentIcon key={0} />]}
          />
          <Typography sx={styles.part2Text}>REAL ESTATE</Typography>
        </Box>
        <Box sx={styles.part2}>
          <Typography sx={styles.part2Text}>WITH SVOY</Typography>
          <ButtonRectangle
            sx={styles.part3Button}
            content="WHOLE COLLECTION"
            width={'310px'}
            rightIcon={[
              <ArrowRightIcon key={0} />,
              <ArrowRightWhiteIcon key={1} />,
            ]}
          />
        </Box>
        <Typography sx={styles.part4Text}>REAL ESTATE AGENCY</Typography>
        <Box sx={styles.img1}>
          <Image
            src="/img/main/img1.jpg"
            width={1200}
            height={130}
            alt={'the beautiful house'}
          />
          <Box sx={styles.ripple}>
            <RippleEffect width="180px" height="180px" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopSection;
