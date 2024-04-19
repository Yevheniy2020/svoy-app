'use client';
import React, { FC } from 'react';
import { Box } from '@mui/material';

import * as styles from '@/app/(main)/Home.styles';
import ArrowRightIcon from '@/components/common/icon/arrow-right';
import ArrowRightWhiteIcon from '@/components/common/icon/arrow-right-white';
import ButtonLink from '@/components/common/ui/button-link';

const ButtonLinkPage: FC = () => {
  return (
    <Box>
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
  );
};

export default ButtonLinkPage;
