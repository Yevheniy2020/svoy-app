'use client';
import React, { FC } from 'react';
import { Box } from '@mui/material';

import ArrowRightIcon from '@/components/common/icon/arrow-right';
import ArrowRightWhiteIcon from '@/components/common/icon/arrow-right-white';
import TridentIcon from '@/components/common/icon/trident';

import ButtonRectangle from '../../../common/ui/button-rectangle';

import * as styles from './ButtonRectanglePage.styles';

const ButtonRectanglePage: FC = () => {
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
        <ButtonRectangle
          sx={styles.button}
          content="WHOLE COLLECTION"
          width={'400px'}
        />
        <ButtonRectangle
          sx={styles.button}
          content="WHOLE COLLECTION"
          width={'400px'}
          rightIcon={[<ArrowRightIcon key={0} />]}
        />
        <ButtonRectangle
          sx={styles.button}
          content="WHOLE COLLECTION"
          width={'400px'}
          rightIcon={[null, <ArrowRightIcon key={0} />]}
        />
        <ButtonRectangle
          sx={styles.button}
          content="WHOLE COLLECTION"
          width={'400px'}
          leftIcon={[<ArrowRightIcon key={0} />]}
        />
        <ButtonRectangle
          sx={styles.button}
          content="WHOLE COLLECTION"
          width={'400px'}
          leftIcon={[null, <ArrowRightIcon key={0} />]}
        />
        <ButtonRectangle
          sx={styles.button}
          content="WHOLE COLLECTION"
          width={'400px'}
          leftIcon={[
            <ArrowRightIcon key={0} />,
            <ArrowRightWhiteIcon key={1} />,
          ]}
        />
        <ButtonRectangle
          sx={styles.button}
          content="WHOLE COLLECTION"
          width={'400px'}
          rightIcon={[
            <ArrowRightIcon key={0} />,
            <ArrowRightWhiteIcon key={1} />,
          ]}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ButtonRectangle content="WHOLE COLLECTION" width={'400px'} />
        <ButtonRectangle
          content="WHOLE COLLECTION"
          width={'400px'}
          rightIcon={[<ArrowRightIcon key={0} />]}
        />
        <ButtonRectangle
          content="WHOLE COLLECTION"
          width={'400px'}
          rightIcon={[null, <TridentIcon key={0} />]}
        />
        <ButtonRectangle
          content="WHOLE COLLECTION"
          width={'400px'}
          leftIcon={[<ArrowRightIcon key={0} />]}
        />
        <ButtonRectangle
          content="WHOLE COLLECTION"
          width={'400px'}
          leftIcon={[null, <TridentIcon key={0} />]}
        />
        <ButtonRectangle
          content="WHOLE COLLECTION"
          width={'400px'}
          leftIcon={[<ArrowRightIcon key={0} />, <TridentIcon key={1} />]}
        />
        <ButtonRectangle
          content="WHOLE COLLECTION"
          width={'400px'}
          rightIcon={[<ArrowRightIcon key={0} />, <TridentIcon key={1} />]}
        />
      </Box>
    </Box>
  );
};

export default ButtonRectanglePage;
