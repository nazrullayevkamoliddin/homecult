import { createStyles } from '@mantine/core';
import { screenSizes } from '../../styles/variables';

export const useStyles = createStyles((theme, _props, getRef) => ({
  root: {
    width: '100%',
  },
  input: {
    minHeight: '48px',
    width: '100%',
    fontSize: '14px',
    lineHeight: '18px',
    '::placeholder': {
      fontSize: '14px',
    },
  },
  label: {
    ref: getRef('label'),
    textAlign: 'left',
    display: 'block',
    width: 'max-content',
    fontSize: '14px',
  },
  relative: { position: 'relative' },
  truncateLabel: {
    [`@media (max-width: ${screenSizes.lg})`]: {
      // width: '180px',
      // whiteSpace: 'nowrap',
      // overflow: 'hidden',
      // textOverflow: 'ellipsis',
    },
  },
}));
