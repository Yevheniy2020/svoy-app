'use client';
import { Typography } from '@mui/material';

import ButtonLink from '@/components/common/button-link/ButtonLink';

import * as styles from './testStyles.styles';

export default function Home() {
  return (
    <div>
      <ButtonLink content="Hello world" variant="rectangle" />
      <ButtonLink content="Hello world" variant="circle" />
      <Typography sx={styles.test2}>
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography sx={styles.test}>
        Whereas recognition of the inherent dignity
      </Typography>
    </div>
  );
}
