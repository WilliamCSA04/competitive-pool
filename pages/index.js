import { Box, Divider, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ChampionSlash, Lane } from '../components';
import { useChampions } from '../hooks';
import { ddragonServices, supabaseService } from '../services';
import { supabase, TABLES } from '../utils';

export default function Home({ URL }) {
  const { champions } = useChampions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [topLane, setTopLane] = useState([]);
  const championList = Object.values(champions);
  useEffect(() => {
    if (champions) {
      const subscription = supabase
        .from(TABLES.CHAMPION_ROLES)
        .on('*', (championRoles) => {
          const { new: data } = championRoles;
          const champion = championList.find(
            (champ) => champ.decorated.id === data.champion_id
          );
          setTopLane([...topLane, champion]);
        })
        .subscribe();
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [champions, championList, topLane]);
  return (
    <div>
      <Head>
        <title>Competitive Pool</title>
      </Head>
      <Box>
        <Heading>Top</Heading>
        <Divider my={1} />
        <Lane champions={topLane} />
      </Box>
      {champions && (
        <Flex wrap="wrap" justify="space-between">
          {championList.map((champion) => {
            return (
              <ChampionSlash
                key={champion.id}
                src={`${URL.GET_LOADING}${champion.id}_0.jpg`}
                alt={champion.name}
                champion={champion}
              />
            );
          })}
        </Flex>
      )}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      URL: ddragonServices.URL,
    },
  };
}
