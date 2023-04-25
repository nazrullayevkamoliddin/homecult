import { createStyles } from '@mantine/core';
import { BgFooterHome } from '../../../components/assets';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '349px',
    backgroundImage: `url(${BgFooterHome.src})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    margin: '0',
    backgroundSize: 'cover',
  },
  req_btn2: {
    color: 'rgba(255,255,255,0.8)',
    paddingBottom: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid orange',
  },
  req_btn: {
    position: 'relative',
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.8)',
    '::after': {
      content: '""',
      width: '0%',
      height: '2px',
      background: 'rgba(233,106, 91, 0.7)',
      position: 'absolute',
      bottom: 0,
    },
    ':hover': {
      '::after': {
        content: '""',
        transition: 'width 0.5s ease',
        width: '100%',
      },
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
