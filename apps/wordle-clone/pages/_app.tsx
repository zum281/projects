import { AppProps } from 'next/app';
import { GlobalCSS } from '@zusk/zsk-ds';
import { Layout } from '../components/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
