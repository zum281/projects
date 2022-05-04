import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import Layout from './layout';

export default {
  component: Layout,
  title: 'Layout',
} as Meta;

const theme = extendTheme({});

const Template: Story = ({ title, description }) => (
  <ChakraProvider theme={theme}>
    <Layout title={title} description={description}>
      <p>Hi</p>
    </Layout>
  </ChakraProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'test',
  description: 'test',
};
