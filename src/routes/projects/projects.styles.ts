import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  w: {},
  overlay: {
    ref: getRef('overlay'),
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(233,106, 91, 0.7)',
    opacity: 0,
    transition: 'opacity 0.2s ease-in',
  },
  overWrap: {
    [`&:hover .${getRef('overlay')}`]: {
      opacity: 1,
      transition: 'opacity 0.2s ease-in',
    },
    width: '100%',
    height: '100%',
    position: 'relative',
    cursor: 'pointer',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: '34px',
      textAlign: 'center',
    },
  },
}));
