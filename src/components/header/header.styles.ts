import { createStyles } from '@mantine/core';

interface HeaderProps {
  sticky?: boolean;
}

export const useStyles = createStyles((theme, { isOpened }: { isOpened: boolean }, getRef) => ({
  header: {
    width: '100%',
    height: '71.38px',
    margin: '-71.38px 0 0 0',
    position: 'sticky',
    top: 0,
    padding: '20px 4% 20px 4%',
    zIndex: 10,
  },

  abnormalText: {
    cursor: 'pointer',
    color: isOpened ? '#100000' : 'white',
    transition: 'color 0.2s ease-in',
  },
  menu: {
    // width: '100%',
    position: 'relative',
    // height: '100%',
    cursor: 'pointer',

    '::after': {
      content: '""',
      position: 'absolute',
      width: '0%',
      left: '0%',
      height: '1px',
      bottom: '-2px',
      background: 'rgba(233, 106, 91, 0.7)',
      transform: 'scaleX(100%)',
      transition: 'width 0.6s ease-out',
    },
    ':hover': {
      '::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        left: '0%',
        height: '1px',
        background: 'rgba(233, 106, 91, 0.7)',
        transition: 'width 0.6s ease-out',
      },
    },
    // transition: 'border-bottom 1s ease-in',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    position: 'absolute',
    height: 'calc(100vh - 48px)',
    width: 'calc(100vw - 72px)',
  },
  group: {
    // width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    [`${theme.fn.smallerThan('sm')}`]: {
      flexDirection: 'column',
      height: '80%',
    },
  },
}));
