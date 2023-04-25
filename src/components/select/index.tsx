import { Select as SelectField, SelectProps } from '@mantine/core';
import { useStyles } from './select.styles';

const Select = (props: SelectProps) => {
  const { classes } = useStyles();
  return (
    <SelectField
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      {...props}
    />
  );
};

export default Select;
