import { supabase, TABLES } from '../utils';

export async function insert({ toInsert = [], table }) {
  const { data, error } = await supabase.from(table).insert(toInsert);
}

export async function getById({ table, id }) {
  return supabase.from(table).select('*').eq('id', id);
}

export function subscribe({ table, onFn, on = '*' }) {
  return supabase.from(table).on(on, onFn).subscribe();
}

export async function setLaners({ dataHandler, championList, roleId }) {
  const { data } = await supabase
    .from(TABLES.ROLES)
    .select('*, champions!inner(*)')
    .eq('id', roleId);
  if (Array.isArray(data?.[0]?.champions)) {
    const parsedData = data[0].champions
      .map((champ) => {
        return championList.find((champion) => {
          return champ.id === champion.id;
        });
      })
      .filter((u) => u);
    dataHandler(parsedData);
  }
}

export async function getAllFrom({ table }) {
  return supabase.from(table).select('*');
}
