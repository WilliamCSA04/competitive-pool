import { supabase } from '../utils';

export async function insert({ toInsert = [], table }) {
  const { data, error } = await supabase.from(table).insert(toInsert);
  console.log('data', data);
  console.log('error', error);
}

export async function subscribe({ table }) {
  const championRoles = supabase
    .from(table)
    .on('*', (payload) => {
      console.log('Change received!', payload);
    })
    .subscribe();
  return championRoles;
}

export async function getAllFrom({ table }) {
  return supabase.from(table).select('*');
}
