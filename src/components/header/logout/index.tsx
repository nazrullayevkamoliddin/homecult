import { Button, Center, Group } from '@mantine/core';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import Modal from '../../modal';
import { useStyles } from './login.styles';
import { useCollectUser } from '../../../context/user/user.state';
import { logout } from '../../../context/user/user.action';
import { showNotification } from '@mantine/notifications';

interface LoginModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
const LogoutModal = ({ setOpen, open }: LoginModalProps) => {
  const { dispatch } = useCollectUser();
  const handleLogout = () => {
    showNotification({
      title: `Tizimdan chiqish`,
      message: 'Siz tizimdan chiqdingiz. 👋',
    });
    dispatch(logout());
    setOpen(false);
  };

  const cancelLogout = () => {
    setOpen(false);
  };

  return (
    <Modal title="Tizimidan chiqishga rozimisiz?" onClose={() => setOpen(false)} opened={open}>
      <Group align={'end'} sx={{ width: '100%', height: '70px', justifyContent: 'center' }}>
        <Button onClick={cancelLogout} color={'dark'} variant="outline" size="lg">
          Bekor qilish
        </Button>
        <Button onClick={handleLogout} color="red" size="lg">
          Chiqish
        </Button>
      </Group>
    </Modal>
  );
};

export default LogoutModal;
