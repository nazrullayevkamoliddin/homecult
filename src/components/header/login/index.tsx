import { Alert, Box, Center, Notification, Stack, Tabs, Text, Textarea, useMantineColorScheme } from '@mantine/core';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import DatePicker from '../../date-picker';
import Modal from '../../modal';
import StyledTabs from '../../tabs';
import TextInput from '../../text-input';
import { CalendarIcon } from '@modulz/radix-icons';
import NumberInput from '../../number-input';
import { useStyles } from './login.styles';
import Button from '../../button';
import PasswordInput from '../../password-input';
import { useCollectUser } from '../../../context/user/user.state';
import { loginAction } from '../../../context/user/user.action';
import { showNotification } from '@mantine/notifications';

interface LoginModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  joinTeam?: boolean;
}
const LoginModal = ({ setOpen, open, joinTeam = false }: LoginModalProps) => {
  const { dispatch } = useCollectUser();
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // @ts-expect-error
    if (e.target.tel.value.length) {
      showNotification({
        title: `Successfully completed`,
        message: "Thank you for message!",
      });
      dispatch(loginAction('token123'));
      setOpen(false);
      toggleColorScheme('light')
    }
  };
  const handleVerification = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(loginAction(''));
  };

  return (
    <Modal
      fullScreen
      transition={'scale-y'}
      transitionDuration={500}
      classNames={{ modal: classes.modal }}
      onClose={() => { setOpen(false); toggleColorScheme('light') }}
      opened={open}
    >
      <form className={classes.form} onSubmit={handleLogin}>
        <Text size={38} my={60} weight={200} align="center" color={'white'}>{joinTeam ? 'JOIN THE TEAM' : 'MAKE REQUEST'}</Text>
        <Stack spacing={25}>
          <TextInput
            required
            name="name"
            label="Name"
            placeholder={"Enter your name"}
          />
          <TextInput
            name="tel"
            type={'number'}
            required
            label="Phone"
            placeholder="Enter your phone number"
          />
          <TextInput
            name="email"
            type="email"
            required
            label="Email"
            placeholder="Enter your email"
          />
          <Textarea
            name="your_comment"
            required
            styles={{ label: { fontSize: '14px' }, input: { fontSize: '14px' } }}
            placeholder="Enter your comment"
            label="Your comment"
          />
          <Center mt={40}>
            <Button
              type='submit'
              unstyled
              className={classes.sendBtn}
            >
              Send
            </Button>
          </Center>
        </Stack>
      </form>
    </Modal>
  );
};

export default LoginModal;
