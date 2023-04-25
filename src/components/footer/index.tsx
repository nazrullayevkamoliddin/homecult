import { Container, Divider, Group, SimpleGrid, Stack, Text, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';
import { LogoPng } from '../assets';
import { mainItemsFooter } from './footer.items';
import { useStyles } from './footer.styles';

const Footer = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <footer className={classes.wrapper}>
      <Container size={'xl'}>
        <SimpleGrid
          pt={72}
          pb={63}
          spacing={30}
          breakpoints={[
            { minWidth: 918, cols: 4, spacing: 'sm' },
            { minWidth: 755, cols: 2, spacing: 'sm' },
            { minWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <Stack align={'center'}>
            <Group>
              <img
                onClick={() => router.push('/')}
                width={'70px'}
                style={{ borderRadius: '50%', cursor: 'pointer' }}
                src={LogoPng.src}
                alt="logo"
              />
              <Text onClick={() => router.push('/')} sx={{ cursor: 'pointer' }} color="white">
                zulfiya.wcu.uz
              </Text>
            </Group>
          </Stack>
          {mainItemsFooter.map((item, index) => {
            return (
              <Stack align={'center'} key={index} spacing={10}>
                <Text align="center" color={'white'} mb={18}>
                  {item.title}
                </Text>
                <Group
                  spacing={12}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => router.push(item.link1)}
                >
                  {item.icon1 && <item.icon1 width={18} height={18} color={'white'} />}{' '}
                  <Text color={'white'} size={'sm'}>
                    {item.item1}
                  </Text>
                </Group>
                <Group
                  spacing={12}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => router.push(item.link2)}
                >
                  {item.icon2 && (
                    <item.icon2 width={18} height={18} color={'white'} stroke="white" />
                  )}{' '}
                  <Text color={'white'} size={'sm'}>
                    {item.item2}
                  </Text>
                </Group>
                {item.item3 && (
                  <Group
                    spacing={12}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => router.push(item.link3)}
                  >
                    {item.icon3 && (
                      <item.icon3 width={18} height={18} color={'white'} stroke="white" />
                    )}{' '}
                    <Text color={'white'} size={'sm'}>
                      {item.item3}
                    </Text>
                  </Group>
                )}
                {item.item4 && (
                  <Group
                    spacing={12}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => router.push(item.link4)}
                  >
                    {item.icon4 && (
                      <item.icon4 width={18} height={18} color={'white'} stroke="white" />
                    )}{' '}
                    <Text color={'white'} size={'sm'}>
                      {item.item4}
                    </Text>
                  </Group>
                )}
              </Stack>
            );
          })}
        </SimpleGrid>
        <Divider size={'xs'} />
        <Group position="apart" align={'center'} py={45}>
          <Text size={'sm'} color={'white'}>
            {new Date(Date.now()).getFullYear()} © kamoliddin.uz
          </Text>
          <Text size={'sm'} sx={{ cursor: 'pointer' }} color={'white'}>
            © S Corp.
          </Text>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
