import Img, { ImageProps } from 'next/image';
import { useStyles } from './image.styles';

export interface ImgProp extends ImageProps {
  full?: boolean;
  zoom?: boolean;
}
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const Image = (props: ImgProp) => {
  const { classes } = useStyles(props);
  return (
    <div className={classes.wrapper}>
      <Img
        alt={`${props.alt}`}
        objectFit="cover"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(Number(props.width), Number(props.height))
        )}`}
        className={props.className}
        layout="intrinsic"
        src={props.src}
        width={props.width}
        height={props.height}
        priority
        placeholder="blur"
      />
    </div>
  );
};

/**
 * props.zoom ? (
    <div className={classes.imageBox}>
      <Image
        alt={`${props.alt}`}
        objectFit="cover"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(Number(props.width), Number(props.height))
        )}`}
        layout="responsive"
        src={props.src}
        width={props.width}
        height={props.height}
        priority
        placeholder="blur"
      />
    </div>
  ) :
 */

export default Image;
