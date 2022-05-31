import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import { ChampionSlash } from '../ChampionSplash';

const Centralize = ({ children }) => (
  <Center borderRadius="md" width={308} height={580} border="1px">
    {children}
  </Center>
);

export default function Lane({ champions = [], onClick, URL }) {
  return (
    <Wrap>
      {champions.map((champion) => (
        <WrapItem key={champion.id}>
          <ChampionSlash
            key={champion.id}
            src={`${URL.GET_LOADING}${champion.id}_0.jpg`}
            alt={champion.name}
            champion={champion}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}
