import { supabase } from '../utils';

export async function insert({ toInsert = [], table }) {
  const { data, error } = await supabase.from(table).insert(toInsert);
  console.log('data', data);
  console.log('error', error);
}
