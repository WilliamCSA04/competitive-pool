import { useReducer } from 'react';

const store = {
  TOP_LOADER: 0,
  JUNGLE_LOADER: 0,
  MID_LOADER: 0,
  ADC_LOADER: 0,
  SUP_LOADER: 0,
};

export const ACTIONS_USE_LOADER = {
  TOP_LOAD: 'topLoad',
  JUNGLE_LOAD: 'jungleLoad',
  MID_LOAD: 'midLoad',
  ADC_LOAD: 'adcLoad',
  SUP_LOAD: 'supLoad',
  TOP_UNLOAD: 'topUnload',
  JUNGLE_UNLOAD: 'jungleUnload',
  MID_UNLOAD: 'midUnload',
  ADC_UNLOAD: 'adcUnload',
  SUP_UNLOAD: 'supUnload',
};

export const STATES_KEYS_BY_ACTIONS = {
  [ACTIONS_USE_LOADER.TOP_LOAD]: 'TOP_LOADER',
  [ACTIONS_USE_LOADER.JUNGLE_LOAD]: 'JUNGLE_LOADER',
  [ACTIONS_USE_LOADER.MID_LOAD]: 'MID_LOADER',
  [ACTIONS_USE_LOADER.ADC_LOAD]: 'ADC_LOADER',
  [ACTIONS_USE_LOADER.SUP_LOAD]: 'SUP_LOADER',
  [ACTIONS_USE_LOADER.TOP_UNLOAD]: 'TOP_LOADER',
  [ACTIONS_USE_LOADER.JUNGLE_UNLOAD]: 'JUNGLE_LOADER',
  [ACTIONS_USE_LOADER.MID_UNLOAD]: 'MID_LOADER',
  [ACTIONS_USE_LOADER.ADC_UNLOAD]: 'ADC_LOADER',
  [ACTIONS_USE_LOADER.SUP_UNLOAD]: 'SUP_LOADER',
};

function reducer(state, action) {
  const sumLoader = (loader) => ({
    ...state,
    [loader]: state[loader] + 1,
  });
  const diffLoader = (loader) => ({
    ...state,
    [loader]: state[loader] - 1,
  });
  const ACTIONS_EXEC = {
    [ACTIONS_USE_LOADER.TOP_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.TOP_LOAD]
    ),
    [ACTIONS_USE_LOADER.JUNGLE_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.JUNGLE_LOAD]
    ),
    [ACTIONS_USE_LOADER.MID_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.MID_LOAD]
    ),
    [ACTIONS_USE_LOADER.ADC_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.ADC_LOAD]
    ),
    [ACTIONS_USE_LOADER.SUP_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.SUP_LOAD]
    ),
    [ACTIONS_USE_LOADER.TOP_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.TOP_UNLOAD]
    ),
    [ACTIONS_USE_LOADER.JUNGLE_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.JUNGLE_UNLOAD]
    ),
    [ACTIONS_USE_LOADER.MID_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.MID_UNLOAD]
    ),
    [ACTIONS_USE_LOADER.ADC_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.ADC_UNLOAD]
    ),
    [ACTIONS_USE_LOADER.SUP_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADER.SUP_UNLOAD]
    ),
  };
  const executable = ACTIONS_EXEC[action];
  console.log(executable);
  console.log(action);
  if (typeof executable === 'function') return executable();
  return state;
}

export function useLoader() {
  const [state, dispatch] = useReducer(reducer, store);
  return { state, dispatch, actions: ACTIONS_USE_LOADER };
}
