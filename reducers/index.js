import loaderReducer, { load, unload } from './loader';
import championReducer, { setChampions } from './champion';

export const reducers = {
  loader: loaderReducer,
  champion: championReducer,
};

export const actions = {
  loader: { load, unload },
  champion: { setChampions },
};
