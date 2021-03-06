import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from '../components';
import { supabase } from '../utils';
import { AiOutlineGithub } from 'react-icons/ai';

export default function Login() {
  const [hasError, setHasError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const { error } = supabase.auth.signIn({
      provider: 'github',
    });
    setHasError(error);
  };

  return (
    <Center as="form" h="100vh" onSubmit={onSubmit}>
      <Card as={VStack} spacing="5" maxW="300px">
        <Heading mr="auto">Login</Heading>
        <Button type="submit" colorScheme="gray" leftIcon={<AiOutlineGithub />}>
          Login with github
        </Button>
      </Card>
    </Center>
  );
}
