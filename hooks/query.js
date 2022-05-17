import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ddragonServices } from '../services';

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
        setChampions(champions);
      } catch {
        setChampions({});
      }
    }
    getChampions();
  }, [data]);
  console.log(champions);
  return { champions, ...res };
}
