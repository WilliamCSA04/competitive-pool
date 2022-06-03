import { Center, Skeleton, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { ChampionSlash } from '../ChampionSplash';

const Centralize = ({ children }) => (
  <Center borderRadius="md" width={308} height={580} border="1px">
    {children}
  </Center>
);

export default function Lane({ champions = [], URL, isLoadingChamp }) {
  console.log('isLoadingChamp', isLoadingChamp);
  return (
    <Wrap>
      {champions.map((champion) => (
        <WrapItem key={champion.id}>
          <ChampionSlash
            key={champion.id}
            src={`${URL.GET_LOADING}${champion.riot_id}_0.jpg`}
            alt={champion.name}
            champion={champion}
          />
        </WrapItem>
      ))}
      {!!isLoadingChamp && (
        <WrapItem>
          <Skeleton w="308px" h="560px" />
        </WrapItem>
      )}
    </Wrap>
  );
}
