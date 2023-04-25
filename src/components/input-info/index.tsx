import { Box, Paper, Text } from '@mantine/core';
import { InfoCircledIcon } from '@modulz/radix-icons';
import React, { ReactChildren, ReactElement, ReactNode, useState } from 'react';
import Modal from '../modal';
import { useStyles } from './input-info.styles';

interface Props {
  infoText?: string;
  infoTitle?: string;
  children: ReactElement<any, any> | Element | ReactNode | Node;
}

const InfoInput = (data: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const { classes } = useStyles();
  const closeModal = () => {
    setOpen(false);
  };
  const openModal = () => {
    setOpen(true);
  };
  const textArray = data.infoText?.split(/^/gm);
  return (
    <>
      <Modal title={data.infoTitle} opened={open} onClose={closeModal}>
        <Text align="left" size={'sm'}>
          {textArray
            ? textArray?.map((item, index) => {
                return (
                  <div key={index}>
                    <br />
                    {item}
                  </div>
                );
              })
            : data.infoText}
        </Text>
      </Modal>
      <div className={classes.relative}>
        {data.children}
        {data.infoText && (
          <Box onClick={openModal} className={classes.absolute}>
            <InfoCircledIcon width={20} height={20} color="#228be6" />
          </Box>
        )}
      </div>
    </>
  );
};

export default InfoInput;
