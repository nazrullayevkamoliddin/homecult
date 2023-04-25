import { createStyles } from '@mantine/core';
import { ImgProp } from '.';

export const useStyles = createStyles((theme, { ...props }: ImgProp, _getRef) => ({
  wrapper: {
    // maxWidth: `${props.width}` ?? 'auto',
    // maxHeight: `${props.height}` ?? 'auto',
    // width: props.full ? `${props.width}` : '100%',
    // heihgt: props.full ? `${props.height}` : '100%',
  },
  img: {
    objectFit: 'cover',
    width: props.full ? `${props.width}` : '100%',
    heihgt: props.full ? `${props.height}` : '100%',
  },
  imageBox: {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'block',
    maxWidth: `${props.width}` ?? 'auto',
    maxHeight: `${props.height}` ?? 'auto',
    width: props.full ? `${props.width}` : '100%',
    heihgt: props.full ? `${props.height}` : '100%',
    img: {
      objectFit: 'cover',
      maxWidth: '100%',
      transition: 'all 0.3s',
      transform: 'scale(1)',
    },
    ':hover img': {
      transform: 'scale(1.2)',
    },
  },
}));
