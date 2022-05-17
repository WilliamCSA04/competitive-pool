import { useContext } from 'react';
import { DataContext } from '../context';

export function useData() {
  const data = useContext(DataContext);
  return data;
}
