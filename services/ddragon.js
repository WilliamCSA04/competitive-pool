import { PUBLIC_VARS } from '../utils';

export const URL = {
  GET_CHAMPIONS: `${PUBLIC_VARS.DDRAGON_API_BASE}${PUBLIC_VARS.DDRAGON_API_VERSION}/${PUBLIC_VARS.DDRAGON_API_CHAMPIONS}`,
  GET_LOADING: `${PUBLIC_VARS.DDRAGON_API_BASE}${PUBLIC_VARS.DDRAGON_API_LOADING}`,
  GET_SPLASH: `${PUBLIC_VARS.DDRAGON_API_SPLASH}`,
  GET_SQUARE: `${PUBLIC_VARS.DDRAGON_API_SQUARE}`,
};

export function getChampions() {
  return fetch(URL.GET_CHAMPIONS);
}
