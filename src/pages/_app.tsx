import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import './../styles/global.css';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Layout from '../components/layout';
import { UserProvider } from '../context/user/user.state';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [mounted, setMounted] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  useEffect(() => setMounted(true), []);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return mounted ? (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            other: {
              components: {
                Container: {
                  defaultProps: {
                    sizes: {
                      xs: 540,
                      sm: 720,
                      md: 960,
                      lg: 1140,
                      xl: 1320,
                    },
                  },
                },
              },
            },
            colorScheme,

            fontFamily: 'Montserrat, sans-serif !important',
            headings: {
              fontFamily: 'Montserrat, sans-serif !important',
              sizes: {
                h1: { fontSize: '81px', lineHeight: '88px' },
                h2: { fontSize: '56px', lineHeight: '72px' },
                h3: { fontSize: '27px', lineHeight: '27px' },
              },
            },
            fontSizes: {
              lg: 22.5,
              md: 20.25,
              sm: 16,
              xs: 14,
              xl: 27,
            },
            breakpoints: {
              xs: 500,
              sm: 800,
              md: 1000,
              lg: 1200,
              xl: 1400,
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <UserProvider>
            <NotificationsProvider position="top-center">
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NotificationsProvider>
          </UserProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  ) : null;
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
