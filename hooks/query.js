import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ddragonServices, supabaseService } from '../services';
import { TABLES } from '../utils';

export function useChampions() {
  const [champions, setChampions] = useState({});
  const res = useQuery('champions', ddragonServices.getChampions, {
    cacheTime: 86400, // 24 hours
  });
  const { data } = res;
  useEffect(() => {
    async function getChampions() {
      try {
        const { data: champions } = await data.json();
        const { data: championsData, error } = await supabaseService.getAllFrom(
          {
            table: TABLES.CHAMPIONS,
          }
        );
        if (!champions) {
          new Error({ message: 'missing champions' });
        }
        if (error) {
          new Error(error);
        }
        const decoratedChampions = Object.values(champions).reduce((acc, c) => {
          const championFromDB = championsData.find((champ) => {
            return champ.riot_id === c.id;
          });
          if (!championFromDB) {
            console.warn(`Champion ${c.name} was not found on DB`);
            return acc;
          }
          return {
            ...acc,
            [championFromDB.riot_id]: {
              ...c,
              ...championFromDB,
            },
          };
        }, {});
        setChampions(decoratedChampions);
      } catch {
        setChampions({});
      }
    }
    getChampions();
  }, [data]);
  return { champions, ...res };
}
