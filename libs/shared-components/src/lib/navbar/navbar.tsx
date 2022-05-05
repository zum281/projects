import { FunctionComponent } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NavbarProps } from './navbar.types';
import { Nav } from './navbar.style';
const Navbar: FunctionComponent<NavbarProps> = ({ title, pages }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="50rem"
        mx="auto"
        px="1rem"
        py={4}
      >
        <NextLink href="/" passHref>
          <Link>{title}</Link>
        </NextLink>

        <Nav>
          {pages.map((page, index) => (
            <NextLink key={index} href={page.href} passHref>
              <Link isExternal={page.external}>{page.name}</Link>
            </NextLink>
          ))}
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Nav>
      </Flex>
    </Box>
  );
};

export default Navbar;
