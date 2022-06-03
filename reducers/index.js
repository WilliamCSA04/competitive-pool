import loaderReducer, { load, unload, LOADER_KEYS } from './loader';
import championReducer, { setChampions } from './champion';

export const reducers = {
  loader: loaderReducer,
  champion: championReducer,
};

export const actions = {
  loader: { load, unload },
  champion: { setChampions },
};

export const keys = {
  loader: LOADER_KEYS,
};
