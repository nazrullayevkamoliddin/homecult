import { createStyles, MantineSize, ButtonProps } from '@mantine/core';
import { colors, fontSizes, lineHeights } from '../../styles/variables';

export const useStyles = createStyles((theme, props: ButtonProps) => ({
  root: {
    width: 'auto',
    borderRadius: '0.5rem',
    // padding: '1rem 1.5rem',
    fontWeight: 600,
    fontSize: theme.fontSizes.md,
    lineHeight: lineHeights.breakpoints.md,
    color: theme.black,
  },
  // outlined: {
  //   backgroundColor: 'transparent',
  //   color: colors.black,
  //   border: `1px solid ${colors.black}`,
  // },
  // filled: {
  //   backgroundColor: colors.black,
  //   color: colors.white,
  //   border: `1px solid ${colors.black}`,
  // },
}));
