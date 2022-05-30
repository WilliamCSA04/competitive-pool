import { useEffect } from 'react';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import Head from 'next/head';
import { ChampionSlash, Lane } from '../components';
import { useChampions } from '../hooks';
import { ddragonServices, supabaseService } from '../services';
import { TABLES } from '../utils';

export default function Home({ URL }) {
  const { champions } = useChampions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const championList = Object.values(champions);
  useEffect(() => {
    async function a() {
      const { data, error } = await supabaseService.subscribe({
        table: TABLES.CHAMPION_ROLES,
      });
      if (error) {
        console.error('Real time update on champion roles', error);
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Competitive Pool</title>
      </Head>
      <Box>
        <Heading>Top</Heading>
        <Divider my={1} />
        <Lane champions={championList} />
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
