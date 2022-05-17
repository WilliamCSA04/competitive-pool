import { createContext, useEffect, useState } from 'react';
import { ddragonServices } from '../services';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [champions, setChampions] = useState([]);
  useEffect(() => {
    async function getChampions() {
      const { data: champions } = await (
        await ddragonServices.getChampions()
      ).json();
      setChampions(champions);
    }
    getChampions();
  }, []);
  return (
    <DataContext.Provider value={{ champions }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
