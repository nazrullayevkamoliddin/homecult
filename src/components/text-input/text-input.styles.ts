import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _props, getRef) => ({
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
    ref: getRef('label'),
    textAlign: 'left',
    display: 'block',
    width: 'max-content',
    fontSize: '14px',
  },
  absolute: {
    position: 'absolute',
    cursor: 'pointer',
    right: '0',
    top: '-4px',
  },
  relative: { position: 'relative' },
}));
