import { NextPage } from 'next';
import {
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export const Index: NextPage = () => {
  return (
    <Stack spacing={3}>
      <FormControl>
        <FormLabel htmlFor="height">Height (cm)</FormLabel>
        <Input id="height" type="number" step={0.01} min={0} size="lg" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="weight">Height (cm)</FormLabel>
        <Input id="weight" type="number" step={0.01} min={0} size="lg" />
      </FormControl>
    </Stack>
  );
};

export default Index;
