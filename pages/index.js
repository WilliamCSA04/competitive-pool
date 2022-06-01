import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ChampionSlash, Lane, RoleButton } from '../components';
import { useChampions, useLane } from '../hooks';
import { ddragonServices, supabaseService } from '../services';
import { ASSETS_PATHS, ROLE_NUMBERS, TABLES } from '../utils';

export default function Home({ URL }) {
  const { champions } = useChampions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [topLane, setTopLane] = useState([]);
  const [jgLane, setJgLane] = useState([]);
  const [midLane, setMidLane] = useState([]);
  const [adcLane, setAdcLane] = useState([]);
  const [supLane, setSupLane] = useState([]);
  const championList = Object.values(champions);

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
  }, [champions, championList, topLane, jgLane, midLane, adcLane, supLane]);
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
      <Box>
        <Heading>Jungle</Heading>
        <Divider my={1} />
        <Lane champions={jgLane} URL={URL} />
      </Box>
      <Box>
        <Heading>Mid</Heading>
        <Divider my={1} />
        <Lane champions={midLane} URL={URL} />
      </Box>
      <Box>
        <Heading>ADC</Heading>
        <Divider my={1} />
        <Lane champions={adcLane} URL={URL} />
      </Box>
      <Box>
        <Heading>Sup</Heading>
        <Divider my={1} />
        <Lane champions={supLane} URL={URL} />
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
