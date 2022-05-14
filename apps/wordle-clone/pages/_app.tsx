import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalCSS } from '@zusk/zsk-ds';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to wordle-clone!</title>
      </Head>
      <GlobalCSS />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
