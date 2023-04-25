import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  alert: {
    width: '100%',
    fontSize: theme.fontSizes.xs,
    padding: theme.spacing.sm,
    textAlign: 'left',
    color: theme.colors.gray[7],
    background: theme.colors.blue[0],
    border: `0.5px solid ${theme.colors.blue[4]}`,
    borderRadius: theme.radius.md,
  },
  signUpBtn: {
    height: '48px',
    color: theme.white,
    borderRadius: '4px',
    fontSize: theme.fontSizes.sm,
  },
  modal: {
    // background: 'black',
  },
  form: {
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto',
  },
  sendBtn: {
    width: '100px',
    cursor: 'pointer',
    background: 'none',
    outline: 'none',
    border: 'none',
    borderRadius: '0',
    paddingBottom: '8px',
    color: 'white',
    fontWeight: 200,
    fontFamily: 'Montserrat',
    borderBottom: '2px solid rgba(233, 106, 91, 0.7)',
  },
}));
