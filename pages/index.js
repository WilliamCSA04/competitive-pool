import { Flex, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { ddragonServices } from '../services';

export default function Home({ champions, URL }) {
  return (
    <div>
      <Head>
        <title>Competitive Pool</title>
      </Head>
      <Flex>
        {Object.values(champions).map((champion, index) => {
          return (
            <Image
              key={index}
              src={`${URL.GET_LOADING}${champion.name}_0.jpg`}
              alt={champion.name}
            />
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
