import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    width: '100%',
  },
  input: {
    height: '48px',
    width: '100%',
    fontSize: '14px',
    lineHeight: '18px',
    '::placeholder': {
      fontSize: '14px',
    },
  },
  label: {
    textAlign: 'left',
    display: 'block',
    width: 'max-content',
    fontSize: '14px',
  },
  innerInput: {
    height: '48px',
    width: '100%',
    fontSize: '14px',
    lineHeight: '18px',
    '::placeholder': {
      fontSize: '14px',
    },
  },
}));
