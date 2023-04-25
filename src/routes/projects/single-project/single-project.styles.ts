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
  redText: {
    color: 'rgba(233,106, 91, 0.7)',
  },
  lightText: {
    color: 'rgba(256,256,256,0.8)',
  },
  backTo: {
    cursor: 'pointer',
  },
  room: {
    marginBottom: '20px',
    objectFit: 'cover',
  },
}));
