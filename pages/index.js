import Head from 'next/head';
import { ddragonServices } from '../services';

export default function Home({ champions }) {
  return (
    <div>
      <Head>
        <title>Competitive Pool</title>
      </Head>
    </div>
  );
}

export async function getStaticProps(context) {
  const champions = await (await ddragonServices.getChampions()).json();
  return {
    props: {
      champions,
    },
  };
}
