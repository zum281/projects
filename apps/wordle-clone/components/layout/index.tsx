import { FunctionComponent as FC } from 'react';
import Head from 'next/head';
import { Main } from './index.style';
import { Header } from './header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Find the word</title>
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
