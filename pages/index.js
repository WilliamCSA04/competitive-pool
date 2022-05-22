import { Box, Flex, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { ChampionSlash } from '../components';
import { useChampions } from '../hooks';
import { ddragonServices } from '../services';

export default function Home({ URL }) {
  const { champions } = useChampions();
  return (
    <div>
      <Head>
        <title>Competitive Pool</title>
      </Head>
      {champions && (
        <Flex wrap="wrap" justify="space-between">
          {Object.values(champions).map((champion) => {
            return (
              <ChampionSlash
                key={champion.id}
                src={`${URL.GET_LOADING}${champion.id}_0.jpg`}
                alt={champion.name}
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
