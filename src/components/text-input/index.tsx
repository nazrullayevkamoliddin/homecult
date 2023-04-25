import { Box, TextInput as TextField, TextInputProps, Text } from '@mantine/core';
import { InfoCircledIcon } from '@modulz/radix-icons';
import { useState } from 'react';
import InfoInput from '../input-info';
import Modal from '../modal';
import { useStyles } from './text-input.styles';

interface InputProps extends TextInputProps {
  infoText?: string;
  infoTitle?: string;
}

const TextInput = ({ infoText, infoTitle, ...props }: InputProps) => {
  const { classes } = useStyles();

  return infoText ? (
    <InfoInput infoText={infoText ?? props.label} infoTitle={infoTitle}>
      <TextField
        classNames={{
          root: classes.root,
          input: classes.input,
          label: classes.label,
        }}
        {...props}
      />
    </InfoInput>
  ) : (
    <TextField
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      {...props}
    />
  );
};

export default TextInput;
