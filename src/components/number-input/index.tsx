import { NumberInput as NumberField, NumberInputProps } from '@mantine/core';
import { useStyles } from './number-input.styles';

const NumberInput = (props: NumberInputProps) => {
  const { classes } = useStyles();
  return (
    <NumberField
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      {...props}
    />
  );
};

export default NumberInput;
