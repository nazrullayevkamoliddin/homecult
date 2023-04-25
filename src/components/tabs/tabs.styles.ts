import { createStyles } from '@mantine/core';
import { screenSizes } from '../../styles/variables';

export const useStyles = createStyles((theme, { space }: { space?: string }, getRef) => ({
  root: {
    width: '100%',
    padding: '0',
    margin: '0',
  },
  panel: {
    margin: '90px 0 0 0',
  },
  tabLabel: {
    ref: getRef('tabLabel'),
    fontSize: '10px',
    fontWeight: 400,
    color: theme.colors.dark[6],
  },
  tabsList: {
    width: '100%',
    display: 'flex',
    borderBottom: 'none',
    justifyContent: 'center',
    gap: '30px',
    [`@media (max-width: ${screenSizes.md})`]: {
      padding: '0 10px',
    },
  },
  tabsListWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
  },
  tab: {
    padding: '2px 0 !important',
    ':focus': {
      background: 'transparent',
      borderBottom: '1px solid red',
    },
    ':hover': {
      background: 'transparent',
      borderBottom: '1px solid red',
    },
    '&[data-active]': {
      borderBottom: '1px solid red',
      borderColor: theme.colors.red[7],
    },
  },
}));
