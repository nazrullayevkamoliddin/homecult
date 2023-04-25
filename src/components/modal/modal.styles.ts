import { createStyles } from '@mantine/core';
import { colors } from '../../styles/variables';

export const useStyles = createStyles(() => ({
  closeIcon: {
    width: '24px',
    height: '24px',
    svg: {
      width: '24px',
      height: '24px',
    },
    // position: 'absolute',
    // right: '24px',
    // top: '25px',
    // cursor: 'pointer',
  },
  modal: {
    borderRadius: '8px',
    padding: '24px 36px !important',
    textAlign: 'center',
    backgroundColor: 'rgb(236, 232, 229)',
  },
  title: {
    fontWeight: 500,
  },
}));
