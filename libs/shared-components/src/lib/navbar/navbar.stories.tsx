import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import { Link } from '../..';
import Navbar from './navbar';

const pages: Link[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default {
  component: Navbar,
  title: 'Navbar',
} as Meta;

const Template: Story = () => (
  <ChakraProvider>
    <Navbar pages={pages} />
  </ChakraProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
