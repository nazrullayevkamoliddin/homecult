import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  swiper: {
    width: '100%',
    maxHeight: '772px',
    height: '100%',
    position: 'relative',
    [`@media (max-width: ${theme.breakpoints.lg})`]: {
      height: '60%',
    },
  },
  rightNav: {
    top: '45%',
    transform: 'translate(-50%,50%)',
    position: 'absolute',
    right: 0,
    zIndex: 15,
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '50%',
    padding: '10px',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    ':hover': {
      [`& .${getRef('icon')}`]: {
        path: {
          fill: 'white',
        },
      },
      border: '1px solid rgba(255,255,255,1)',
    },
  },
  leftNav: {
    top: '45%',
    transform: 'translate(50%,50%)',
    position: 'absolute',
    left: 0,
    zIndex: 15,
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '50%',
    padding: '10px',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    ':hover': {
      [`& .${getRef('icon')}`]: {
        path: {
          fill: 'white',
        },
      },
      border: '1px solid rgba(255,255,255,1)',
    },
  },
  icon: {
    ref: getRef('icon'),
  },
}));
