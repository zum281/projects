import { VStack } from '@chakra-ui/react';
import { Head } from 'next/document';
import Navbar from '../navbar/navbar';
import { LayoutProps } from './layout.types';

const Layout: React.FunctionComponent<LayoutProps> = ({
  title,
  description,
  children,
  pages,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar pages={...pages} />
      <VStack spacing={8} py={12}>
        {children}
      </VStack>
    </>
  );
};

export default Layout;
