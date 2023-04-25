import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.dark[5],
    margin: '0 auto',
  },
}));
