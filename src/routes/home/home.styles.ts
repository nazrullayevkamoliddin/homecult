import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'background-image 1s linear',
  },
  swiper: {
    width: '100%',
    height: 'calc(100% - 70px)',
  },
  slide: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    textAlign: 'center',
    fontSize: '56px',
    letterSpacing: 3,
    color: 'rgba(256,256,256,0.6)',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: '42px',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: '24px',
    },
  },
  slideActText: {
    fontWeight: 300,
    color: 'rgba(256,256,256,1)',
  },
  ahref: {
    color: 'rgba(255,255,255,1)',
    fontWeight: 500,
    textDecoration: 'none',
    zIndex: 12,
  },
}));
