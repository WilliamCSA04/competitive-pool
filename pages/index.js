import { Box, Divider, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ChampionSlash, Lane } from '../components';
import { useChampions } from '../hooks';
import { ddragonServices, supabaseService } from '../services';
import { ROLE_NUMBERS, supabase, TABLES } from '../utils';

export default function Home({ URL }) {
  const { champions } = useChampions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [topLane, setTopLane] = useState([]);
  const championList = Object.values(champions);

  useEffect(() => {
    if (!topLane.length && championList.length) {
      async function getData() {
        const { data } = await supabase
          .from(TABLES.ROLES)
          .select('champions!inner(*)')
          .eq('id', ROLE_NUMBERS.TOP);
        if (Array.isArray(data?.[0]?.champions)) {
          const parsedData = data[0].champions
            .map((champ) => {
              return championList.find((champion) => {
                return champ.id === champion.id;
              });
            })
            .filter((u) => u);
          setTopLane(parsedData);
        }
      }
      getData();
    }
  }, [topLane, championList]);

  useEffect(() => {
    if (champions) {
      const subscription = supabase
        .from(TABLES.CHAMPION_ROLES)
        .on('*', (championRoles) => {
          const { new: data } = championRoles;
          const champion = championList.find(
            (champ) => champ.id === data.champion_id
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
        <Lane champions={topLane} URL={URL} />
      </Box>
      {champions && (
        <Flex wrap="wrap" justify="space-between">
          {championList.map((champion) => {
            return (
              <ChampionSlash
                key={champion.id}
                src={`${URL.GET_LOADING}${champion.riot_id}_0.jpg`}
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
