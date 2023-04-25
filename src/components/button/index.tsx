import { Button as StyledButton, ButtonProps } from '@mantine/core';
import React, { forwardRef } from 'react';
import { useStyles } from './button.styles';

const Button = (props: ButtonProps) => {
  const { classes } = useStyles(props);
  return (
    <StyledButton
      classNames={{
        root: classes.root,
      }}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};
export default Button;
