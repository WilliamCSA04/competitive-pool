import loaderReducer, { load, unload } from './loader';

export const reducers = {
  loader: loaderReducer,
};

export const actions = {
  loader: { load, unload },
};
