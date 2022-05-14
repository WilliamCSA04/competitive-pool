const { DDRAGON_API_BASE, DDRAGON_API_CHAMPIONS, DDRAGON_API_VERSION } =
  process.env;

const URL = {
  GET_CHAMPIONS: `${DDRAGON_API_BASE}${DDRAGON_API_VERSION}/${DDRAGON_API_CHAMPIONS}`,
};

export function getChampions() {
  return fetch(URL.GET_CHAMPIONS);
}
