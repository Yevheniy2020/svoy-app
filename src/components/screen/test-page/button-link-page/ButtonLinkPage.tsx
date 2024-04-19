'use client';
import React, { FC } from 'react';
import { Box } from '@mui/material';

import ArrowRightIcon from '@/components/common/icon/arrow-right';
import ArrowRightWhiteIcon from '@/components/common/icon/arrow-right-white';
import TridentIcon from '@/components/common/icon/trident';
import ButtonLink from '@/components/common/ui/button-link';

import * as styles from './ButtonLinkPage.styles';

const ButtonLinkPage: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '100px',
        justifyContent: 'center',
        mt: '20px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ButtonLink
          sx={styles.button1}
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
        />
        <ButtonLink
          sx={styles.button1}
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          rightIcon={[<ArrowRightIcon key={0} />]}
        />
        <ButtonLink
          sx={styles.button1}
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          rightIcon={[, <ArrowRightIcon key={0} />]}
        />
        <ButtonLink
          sx={styles.button1}
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          leftIcon={[<ArrowRightIcon key={0} />]}
        />
        <ButtonLink
          sx={styles.button1}
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          leftIcon={[, <ArrowRightIcon key={0} />]}
        />
        <ButtonLink
          sx={styles.button1}
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          leftIcon={[
            <ArrowRightIcon key={0} />,
            <ArrowRightWhiteIcon key={1} />,
          ]}
        />
        <ButtonLink
          sx={styles.button1}
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          rightIcon={[
            <ArrowRightIcon key={0} />,
            <ArrowRightWhiteIcon key={1} />,
          ]}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ButtonLink
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
        />
        <ButtonLink
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          rightIcon={[<ArrowRightIcon key={0} />]}
        />
        <ButtonLink
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          rightIcon={[, <TridentIcon key={0} />]}
        />
        <ButtonLink
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          leftIcon={[<ArrowRightIcon key={0} />]}
        />
        <ButtonLink
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          leftIcon={[, <TridentIcon key={0} />]}
        />
        <ButtonLink
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          leftIcon={[<ArrowRightIcon key={0} />, <TridentIcon key={1} />]}
        />
        <ButtonLink
          content="WHOLE COLLECTION"
          width={'400px'}
          variant="rectangle"
          rightIcon={[<ArrowRightIcon key={0} />, <TridentIcon key={1} />]}
        />
      </Box>
    </Box>
  );
};

export default ButtonLinkPage;
