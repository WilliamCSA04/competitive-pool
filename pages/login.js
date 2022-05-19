import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from '../components';
import { supabase } from '../utils';

export default function Login() {
  const [hasError, setHasError] = useState(false);
  console.log(hasError);
  const onSubmit = (e) => {
    e.preventDefault();
    const { error } = supabase.auth.signIn({
      provider: 'github',
    });
    setHasError(error);
  };

  return (
    <Center as="form" h="100%" onSubmit={onSubmit}>
      <Card as={VStack} spacing="5" maxW="300px">
        <Heading mr="auto">Login</Heading>
        <Button type="submit">Login with github</Button>
      </Card>
    </Center>
  );
}
