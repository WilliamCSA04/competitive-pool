import { supabase } from '../utils';

export async function insert({ toInsert = [], table }) {
  const { data, error } = await supabase.from(table).insert(toInsert);
}

export async function getById({ table, id }) {
  return supabase.from(table).select('*').eq('id', id);
}

export async function getAllFrom({ table }) {
  return supabase.from(table).select('*');
}
