import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Layout from '../../../libs/shared-components/src/lib/layout/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout title="Speedtype" description="Speedtyping game">
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default CustomApp;
