'use client';
import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/system';
import Image from 'next/image';

import ArrowRightIcon from '@/components/common/icon/arrow-right';
import ArrowRightWhiteIcon from '@/components/common/icon/arrow-right-white';
import TridentIcon from '@/components/common/icon/trident';
import TridentGradientIcon from '@/components/common/icon/trident-gradient';
import ButtonCircle from '@/components/common/ui/button-circle';
import ButtonRectangle from '@/components/common/ui/button-rectangle';
import Container from '@/components/common/ui/container';
import CursorCircle from '@/components/common/ui/cursor-cirlce';
import RippleEffect from '@/components/common/ui/ripple-effect';
import theme from '@/styles/theme/constants';

import * as styles from './TopSection.styles';

const TopSection: FC = () => {
  const isDownDesktop = useMediaQuery(theme.breakpoints.down('desktop'));
  const isDownMobileMedium = useMediaQuery(
    theme.breakpoints.down('mobileMedium'),
  );

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
          {isDownDesktop ? (
            <ButtonCircle
              sx={styles.part2Button}
              content={<TridentGradientIcon />}
              width="100px"
            />
          ) : (
            <ButtonRectangle
              sx={styles.part2Button}
              content="SUPPORT UKRAINE"
              width={'293px'}
              leftIcon={[, <TridentIcon key={0} />]}
            />
          )}
          <Typography sx={styles.part2Text}>REAL ESTATE</Typography>
        </Box>
        <Box sx={styles.part3}>
          <Box sx={styles.part3Center}>
            <Typography sx={styles.part3Text}>WITH SVOY</Typography>
            <Typography sx={styles.part4Text}>REAL ESTATE AGENCY</Typography>
          </Box>
          <Box sx={styles.buttonWrapper}>
            <ButtonRectangle
              sx={styles.part3Button}
              content="WHOLE COLLECTION"
              width={isDownMobileMedium ? '358px' : '310px'}
              rightIcon={[
                <ArrowRightIcon key={0} />,
                <ArrowRightWhiteIcon key={1} />,
              ]}
            />
          </Box>
        </Box>
        <Box sx={styles.img1}>
          {isDownMobileMedium ? (
            <Image
              src="/img/main/img1Mobile.jpg"
              width={358}
              height={208}
              alt={'the beautiful house'}
            />
          ) : (
            <Image
              src="/img/main/img1.jpg"
              width={1200}
              height={140}
              alt={'the beautiful house'}
            />
          )}

          <Box sx={styles.ripple}>
            <RippleEffect width="156px" height="156px" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopSection;
