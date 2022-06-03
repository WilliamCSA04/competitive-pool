import { Box, Divider, Flex, Heading, HStack } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChampionSlash, Lane, RoleButton } from '../components';
import { useChampions, useLane } from '../hooks';
import { actions } from '../reducers';
import { ddragonServices, supabaseService } from '../services';
import { ASSETS_PATHS, ROLE_NUMBERS, TABLES } from '../utils';

const LaneWrapper = ({ champions, URL, isLoadingChamp, lane }) => {
  return (
    <Box>
      <Heading>{lane}</Heading>
      <Divider my={1} />
      <Lane champions={champions} URL={URL} isLoadingChamp={isLoadingChamp} />
    </Box>
  );
};

export default function Home({ URL }) {
  const { champions } = useChampions();
  const [topLane, setTopLane] = useState([]);
  const [jgLane, setJgLane] = useState([]);
  const [midLane, setMidLane] = useState([]);
  const [adcLane, setAdcLane] = useState([]);
  const [supLane, setSupLane] = useState([]);
  const { topLoader, midLoader, jungleLoader, adcLoader, supLoader } =
    useSelector((state) => state.loader);
  const loaderDispatch = useDispatch();
  const championList = Object.values(champions);
  console.log(topLoader);
  useLane({
    lane: topLane,
    dataHandler: (data) => setTopLane(data),
    roleId: ROLE_NUMBERS.TOP,
    championList: championList,
  });

  useLane({
    lane: jgLane,
    dataHandler: (data) => setJgLane(data),
    roleId: ROLE_NUMBERS.JUNGLE,
    championList: championList,
  });

  useLane({
    lane: midLane,
    dataHandler: (data) => setMidLane(data),
    roleId: ROLE_NUMBERS.MID,
    championList: championList,
  });

  useLane({
    lane: adcLane,
    dataHandler: (data) => setAdcLane(data),
    roleId: ROLE_NUMBERS.ADC,
    championList: championList,
  });

  useLane({
    lane: supLane,
    dataHandler: (data) => setSupLane(data),
    roleId: ROLE_NUMBERS.SUP,
    championList: championList,
  });

  useEffect(() => {
    if (champions) {
      const subscription = supabaseService.subscribe({
        table: TABLES.CHAMPION_ROLES,
        onFn: (championRoles) => {
          const { new: data } = championRoles;
          const champion = championList.find(
            (champ) => champ.id === data.champion_id
          );
          if (data.role_id === ROLE_NUMBERS.TOP) {
            setTopLane([...topLane, champion]);
          } else if (data.role_id === ROLE_NUMBERS.JUNGLE) {
            setJgLane([...jgLane, champion]);
          } else if (data.role_id === ROLE_NUMBERS.MID) {
            setMidLane([...midLane, champion]);
          } else if (data.role_id === ROLE_NUMBERS.ADC) {
            setMidLane([...adcLane, champion]);
          } else if (data.role_id === ROLE_NUMBERS.SUP)
            setMidLane([...supLane, champion]);
        },
      });
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [champions, topLane, jgLane, midLane, adcLane, supLane, championList]);
  return (
    <div>
      <Head>
        <title>Competitive Pool</title>
      </Head>
      <LaneWrapper
        lane="Top"
        champions={topLane}
        URL={URL}
        isLoadingChamp={topLoader}
      />
      <LaneWrapper
        lane="Jungle"
        champions={jgLane}
        URL={URL}
        isLoadingChamp={jungleLoader}
      />
      <LaneWrapper
        lane="Mid"
        champions={midLane}
        URL={URL}
        isLoadingChamp={midLoader}
      />
      <LaneWrapper
        lane="ADC"
        champions={adcLane}
        URL={URL}
        isLoadingChamp={adcLoader}
      />
      <LaneWrapper
        lane="Sup"
        champions={supLane}
        URL={URL}
        isLoadingChamp={supLoader}
      />

      {champions && (
        <Flex wrap="wrap" justify="space-between">
          {championList.map((champion) => {
            return (
              <ChampionSlash
                key={champion.id}
                src={`${URL.GET_LOADING}${champion.riot_id}_0.jpg`}
                alt={champion.name}
                champion={champion}
              >
                <HStack
                  spacing={1}
                  position="absolute"
                  zIndex={1}
                  bottom={8}
                  left="50%"
                  transform="translateX(-50%)"
                >
                  <RoleButton
                    src={ASSETS_PATHS.ROLES.TOP}
                    champion={champion}
                    roleId={ROLE_NUMBERS.TOP}
                    onClick={() => {
                      loaderDispatch(actions.loader.load('topLoader'));
                    }}
                  />
                  <RoleButton
                    src={ASSETS_PATHS.ROLES.JUNGLE}
                    champion={champion}
                    roleId={ROLE_NUMBERS.JUNGLE}
                  />
                  <RoleButton
                    src={ASSETS_PATHS.ROLES.MID}
                    champion={champion}
                    roleId={ROLE_NUMBERS.MID}
                  />
                  <RoleButton
                    src={ASSETS_PATHS.ROLES.ADC}
                    champion={champion}
                    roleId={ROLE_NUMBERS.ADC}
                  />
                  <RoleButton
                    src={ASSETS_PATHS.ROLES.SUP}
                    champion={champion}
                    roleId={ROLE_NUMBERS.SUP}
                  />
                </HStack>
              </ChampionSlash>
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
