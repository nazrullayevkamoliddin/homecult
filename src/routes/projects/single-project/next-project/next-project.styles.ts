import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  overWrap: {
    position: 'relative',
    maxWidth: 720,
    cursor: 'pointer',
    maxHeight: '472px',
    margin: '80px auto',
    width: '100%',
    height: '100%',
    padding: '0',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(1,1,1,0.5)',
    bottom: 0,
    right: 0,
    left: 0,
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
  },
  img: {
    maxHeight: '472px',
    objectFit: 'cover',
    width: '100%',
  },
}));
