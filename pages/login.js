import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Card } from '../components';

export default function Login() {
  return (
    <Center as="form" h="100%">
      <Card as={VStack} spacing="5" maxW="300px">
        <Heading>Login</Heading>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <Button>Receive Magic Link</Button>
      </Card>
    </Center>
  );
}
