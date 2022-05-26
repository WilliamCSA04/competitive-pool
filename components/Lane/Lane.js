import { Button, Center, Wrap, WrapItem } from '@chakra-ui/react';

const Centralize = ({ children }) => (
  <Center borderRadius="md" width={308} height={580} border="1px">
    {children}
  </Center>
);

export default function Lane({ champions = [], onClick }) {
  return (
    <Wrap>
      {champions.map((champion) => (
        <WrapItem key={champion.id}></WrapItem>
      ))}
    </Wrap>
  );
}
