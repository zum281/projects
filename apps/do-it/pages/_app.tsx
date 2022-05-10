import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Layout from '../../../libs/shared-components/src/lib/layout/layout';
import { GlobalCSS, theme } from '../styles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalCSS />
      <Layout title="doIt" description="Todo list">
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default CustomApp;
