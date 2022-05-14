import { Box, Flex, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { ddragonServices } from '../services';

export default function Home({ champions, URL }) {
  return (
    <div>
      <Head>
        <title>Competitive Pool</title>
      </Head>
      <Flex wrap="wrap" justify="space-between">
        {Object.values(champions).map((champion) => {
          return (
            <Box key={champion.id} m="1">
              <Image
                src={`${URL.GET_LOADING}${champion.id}_0.jpg`}
                alt={champion.name}
                width={308}
                height={560}
              />
            </Box>
          );
        })}
      </Flex>
    </div>
  );
}

export async function getStaticProps() {
  const { data: champions } = await (
    await ddragonServices.getChampions()
  ).json();
  return {
    props: {
      champions,
      URL: ddragonServices.URL,
    },
  };
}
