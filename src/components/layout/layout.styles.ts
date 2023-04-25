import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _getRef) => ({
  wrapper: {
    width: '100%',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  child: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  toaster: {
    borderRadius: '0px !important',
  },
}));
