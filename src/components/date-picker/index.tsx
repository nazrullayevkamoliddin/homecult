import { DatePicker as DateInput, DatePickerProps } from '@mantine/dates';
import { CalendarIcon } from '@modulz/radix-icons/dist/CalendarIcon';
import { useStyles } from './date-picker.styles';

const DatePicker = (props: DatePickerProps) => {
  const { classes } = useStyles();
  return <DateInput classNames={{ input: classes.input, label: classes.label }} {...props} />;
};

export default DatePicker;
