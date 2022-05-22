import {
  Button,
  Center,
  Icon,
  Text,
  useTheme,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Centralize = ({ children }) => (
  <Center borderRadius="md" width={308} height={580} border="1px">
    {children}
  </Center>
);

export default function Lane({ champions = [] }) {
  return (
    <Wrap>
      {champions.map((champion) => (
        <WrapItem key={champion.id}></WrapItem>
      ))}
      <WrapItem>
        <Centralize>
          <VStack as={Button} variant="invisible" h="auto" w="auto" p={2}>
            <Icon as={AiOutlinePlusCircle} boxSize={8} />
            <Text>Add champion!</Text>
          </VStack>
        </Centralize>
      </WrapItem>
    </Wrap>
  );
}
