import { createStyles } from '@mantine/core';
import { MapImg } from '../../components/assets';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${MapImg.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'relative',
    backgroundColor: 'black',
    backgroundPosition: 'center',
    padding: '0 90px',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      background: 'black',
      padding: '80px 70px 0 70px',
      height: '100%',
    },
  },
  redText: {
    color: 'rgba(233, 106, 91, 0.7)',
    cursor: 'pointer',
  },
  ahref: {
    color: 'rgba(255,255,255,0.8)',
    fontWeight: 500,
    textDecoration: 'none',
    zIndex: 12,
  },
  lightText: {
    color: 'rgba(255,255,255,0.8)',
  },
  target: {
    cursor: 'pointer',
    position: 'absolute',
    top: '40vh',
    left: '50vw',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: 'none',
    },
  },
  borderedText: {
    cursor: 'pointer',
    width: 'max-content',
    color: 'rgba(255,255,255,0.8)',
    paddingBottom: '3px',
    borderBottom: '1px solid rgba(233, 106, 91, 0.7)',
  },
}));
