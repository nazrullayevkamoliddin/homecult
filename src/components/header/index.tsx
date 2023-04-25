import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStyles } from './header.styles';
import {
  Container,
  Group,
  Text,
  useMantineTheme,
  Burger,
  Center,
  Divider,
  useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import Modal from '../modal';
import LoginModal from './login';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const changeColor = () => {
    if (burgerOpen) {
      return true
    }
    else {
      if (router.pathname === '/contact' || router.pathname === '/') {
        return false
      } else
        return true
    }
  }
  const openReqMod = () => {
    setOpen(true)
    toggleColorScheme('dark')
  }
  const { classes } = useStyles({ isOpened: changeColor() });
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const navigateTo = (route: string) => {
    router.push(route)
    setBurgerOpen((o) => !o)
  }
  return (
    <header className={classes.header}>

      <Group style={{}} position="apart">
        <Group spacing={50}>
          <Group onClick={() => setBurgerOpen((o) => !o)} sx={{ zIndex: 10, cursor: "pointer" }} spacing={8}>
            <Burger color={changeColor() ? 'black' : 'white'} size={14} opened={burgerOpen} />
            <Text className={classes.abnormalText} size={14}>{burgerOpen ? 'Close' : 'Menu'}</Text>
          </Group>
          {!isMobile && <Group sx={{ zIndex: 5 }} spacing={13}>
          <Text component="a" target={'_blank'} href="https://www.facebook.com/kamoliddin.nazrullayev" className={classes.abnormalText} size={14}>Facebook</Text>
            <Text component="a" target={'_blank'} href="https://www.instagram.com/kamoliddin.nazrullayev/" className={classes.abnormalText} size={14}>Instagram</Text>
          </Group>}
        </Group>
        <Center>
          <Text size={16} sx={{ letterSpacing: '3px' }} className={classes.abnormalText}>HOMECULT.</Text>
        </Center>
        <Group>
          <Group sx={{ zIndex: 5 }} spacing={40}>
            {!isMobile && <Text sx={{ borderBottom: "1px solid rgba(233, 106, 91, 0.7)", width: 'max-content' }} className={classes.abnormalText} onClick={openReqMod} size={10}>DROP REQUEST</Text>}
          </Group>
        </Group>
      </Group>
      <Modal
        withCloseButton={false}
        zIndex={2}
        fullScreen
        radius={'sm'}
        transition={'scale-x'}
        transitionDuration={500}
        onClose={() => setBurgerOpen(false)}
        opened={burgerOpen}
        shadow="md"
      >
        <div className={classes.wrapper}>
          <Group className={classes.group}>
            <Text onClick={() => navigateTo('/')} className={classes.menu}>HOME</Text>
            {!isMobile && <Divider orientation='vertical' size={0.5}></Divider>}
            <Text onClick={() => navigateTo('/projects')} className={classes.menu}>PROJECTS</Text>
            {!isMobile && <Divider orientation='vertical' size={0.5}></Divider>}
            <Text onClick={() => navigateTo('/about')} className={classes.menu}>ABOUT</Text>
            {!isMobile && <Divider orientation='vertical' size={0.5}></Divider>}
            <Text onClick={() => navigateTo('/contact')} className={classes.menu}>CONTACT</Text>
          </Group>
          {isMobile && <Center>
            <Text onClick={openReqMod} mt={40} align={'center'} sx={{ borderBottom: "1px solid rgba(233, 106, 91, 0.7)", width: 'max-content' }} size={14}>DROP REQUEST</Text>
          </Center>}
        </div>

      </Modal>
      <LoginModal open={open} setOpen={setOpen} />

    </header >
  );
};

export default Header;
