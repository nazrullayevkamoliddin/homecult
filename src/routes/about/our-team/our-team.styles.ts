import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    background: 'hsl(0, 2%, 8%)',
    color: 'white',
  },
  avatar: {
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100%',
    // maxWidth: 'calc(100% / 5)',
    // [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    //   maxWidth: 'calc(100% / 3)',
    // },
    // [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
    //   maxWidth: 'calc(100% / 1)',
    // },
  },
  joinBox: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ref: getRef('overlay'),
    position: 'absolute',
    opacity: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 14,
    left: 0,
    transition: 'opacity 0.2s linear',
  },
  overWrap: {
    position: 'relative',
    maxWidth: 'calc(100% / 5)',
    width: '100%',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.7)',
    height: '100%',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      maxWidth: 'calc(100% / 3)',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      maxWidth: 'calc(100% / 1)',
      height: '200px',
    },
    img: { filter: 'grayscale(100%)' },
    [`&:hover .${getRef('overlay')}`]: {
      transition: 'opacity 0.2s linear',
      opacity: 1,
    },
    ':hover': {
      img: {
        transition: 'filter 0.1s linear',
        filter: 'grayscale(0%)',
      },
    },
  },
  joinText: {
    width: '100%',
    position: 'relative',
    '::after': {
      content: '""',
      position: 'absolute',
      width: '0%',
      left: '0%',
      height: '1px',
      bottom: '-2px',
      background: 'rgba(233, 106, 91, 0.7)',
      transform: 'scaleX(50%)',
      transition: 'width 0.8s ease-out, color 0.8s linear',
    },
    ':hover': {
      '::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        left: '0%',
        height: '1px',
        transform: 'scaleX(50%)',
        transition: 'width 0.8s ease-out, color 0.8s linear',
      },
      color: 'white',
    },
  },
  whiteText: {
    color: 'white',
  },
  dropText: {
    cursor: 'pointer',
    width: 'max-content',
    paddingBottom: '2px',
    borderBottom: '1px solid rgba(233, 106, 91, 0.7)',
  },
}));
