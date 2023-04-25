import { PasswordInput as PasswordField, PasswordInputProps } from '@mantine/core';
import { useStyles } from './password-input.styles';

const PasswordInput = (props: PasswordInputProps) => {
  const { classes } = useStyles();
  return (
    <PasswordField
      classNames={{
        innerInput: classes.innerInput,
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      {...props}
    />
  );
};

export default PasswordInput;
