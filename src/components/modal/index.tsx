import { ActionIcon, Modal as UnstyledModal, ModalProps } from '@mantine/core';
import CloseIcon from '../icons/close.icon';
import { useStyles } from './modal.styles';

const Modal = (props: ModalProps) => {
  const { classes } = useStyles();
  return (
    <UnstyledModal
      centered
      size={456}
      withCloseButton
      classNames={{ modal: classes.modal, title: classes.title, close: classes.closeIcon }}
      {...props}
    >
      {/* <ActionIcon onClick={props.onClose} className={classes.closeIcon}>
        <CloseIcon />
      </ActionIcon> */}
      {props.children}
    </UnstyledModal>
  );
};

export default Modal;
