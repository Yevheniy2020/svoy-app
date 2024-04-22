'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import ArrowRightIcon from '@/components/common/icon/arrow-right';
import ArrowRightWhiteIcon from '@/components/common/icon/arrow-right-white';
import TridentIcon from '@/components/common/icon/trident';
import ButtonCircle from '@/components/common/ui/button-circle';
import CursorCircle from '@/components/common/ui/cursor-cirlce';
import RippleEffect from '@/components/common/ui/ripple-effect';

import ButtonRectangle from '../../components/common/ui/button-rectangle';

import * as styles from './Home.styles';

export default function Home() {
  const [hovering, setHovering] = useState(false);
  return (
    <>
      <Box sx={styles.wrapperTop}>
        <Box sx={styles.container}>
          <Box sx={styles.part1}>
            <Box sx={styles.part1Relative}>
              <Typography
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                sx={styles.part1Text}
              >
                RENT
              </Typography>
            </Box>
            /
            <Typography
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              sx={styles.part1Text}
            >
              BUY
            </Typography>
            <CursorCircle
              text="EXPLORE"
              width={hovering ? `180px` : '0'}
              height={hovering ? `180px` : '0'}
            />
          </Box>
          <Box sx={styles.part2}>
            <ButtonRectangle
              sx={styles.part2Button}
              content="SUPPORT UKRAINE"
              width={'293px'}
              leftIcon={[, <TridentIcon key={0} />]}
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
        </Box>
      </Box>
      <Box sx={styles.wrapperBottom}>
        <Box sx={styles.container}>
          <Box sx={styles.flex}>
            <Box sx={styles.left}>
              <Image
                src="/img/main/img2.jpg"
                width={543}
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
              <ButtonCircle
                sx={styles.buttonCircle}
                hover={true}
                content={'LEARN MORE'}
                width="180px"
              />
              <Box sx={styles.right}>
                <Typography sx={styles.rightText1}>WHAT</Typography>
                <Typography sx={styles.rightText2}>we offer</Typography>
                <Typography sx={styles.rightText3}>
                  Our architecture encourages co-existence. So does our business
                  philosophy. We have abolished barriers of hierarchy and
                  departmentalization to work as a single team. We believe in
                  full transparency — and of course, that entails our clients.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
