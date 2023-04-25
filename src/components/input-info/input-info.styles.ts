import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  absolute: {
    position: 'absolute',
    cursor: 'pointer',
    right: '0',
    top: '-3px',
    width: '18px',
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
    height: '18px',
    [`@media (max-width: 755px)`]: {
      left: '-22px',
      // bottom: '58px',
      top: '0px',
      width: '18px',
      height: '18px',
      svg: {
        width: '18px',
        height: '18px',
      },
    },
  },
  relative: {
    position: 'relative',
    height: 'max-content',
  },
}));
