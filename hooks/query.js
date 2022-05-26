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
        Object.values(champions).forEach((c) => {
          c.decorated = championsData.find(
            (champion) => champion.riot_id === c.id
          );
        });
        setChampions(champions);
      } catch {
        setChampions({});
      }
    }
    getChampions();
  }, [data]);
  return { champions, ...res };
}
