import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Layout from '../../../libs/shared-components/src/lib/layout/layout';
import { GameProvider } from '../context/GameProvider';
import { GlobalStyles } from '../style/Global';
import { theme } from '../style/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GameProvider>
        <GlobalStyles />
        <Layout title="Speedtype" description="Speedtyping game">
          <Component {...pageProps} />
        </Layout>
      </GameProvider>
    </ChakraProvider>
  );
}

export default CustomApp;
