import { useEffect, useReducer } from 'react';
import { supabaseService } from '../services';
import { ACTIONS_USE_LOADING_LANER, STATES_KEYS_BY_ACTIONS } from '../utils';

export function useLane({ lane, roleId, dataHandler, championList }) {
  useEffect(() => {
    if (!lane.length && championList.length) {
      supabaseService.setLaners({
        dataHandler: dataHandler,
        championList: championList,
        roleId: roleId,
      });
    }
  }, [lane, championList, dataHandler, roleId]);
}

const useLoadingLanerInit = {
  TOP_LOADER: 0,
  JUNGLE_LOADER: 0,
  MID_LOADER: 0,
  ADC_LOADER: 0,
  SUP_LOADER: 0,
};

function reducer(state, action) {
  const sumLoader = (loader) => ({
    ...state,
    [state[loader]]: state[loader] + 1,
  });
  const diffLoader = (loader) => ({
    ...state,
    [state[loader]]: state[loader] - 1,
  });
  const ACTIONS_EXEC = {
    [ACTIONS_USE_LOADING_LANER.TOP_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.TOP_LOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.JUNGLE_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.JUNGLE_LOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.MID_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.MID_LOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.ADC_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.ADC_LOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.SUP_LOAD]: sumLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.SUP_LOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.TOP_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.TOP_UNLOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.JUNGLE_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.JUNGLE_UNLOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.MID_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.MID_UNLOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.ADC_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.ADC_UNLOAD]
    ),
    [ACTIONS_USE_LOADING_LANER.SUP_UNLOAD]: diffLoader(
      STATES_KEYS_BY_ACTIONS[ACTIONS_USE_LOADING_LANER.SUP_UNLOAD]
    ),
  };
  ACTIONS_EXEC[action.type];
}

export function useLoadingLaner() {
  const [state, dispatch] = useReducer(reducer, useLoadingLanerInit);
  return { state, dispatch, STATES_ACTIONS: ACTIONS_USE_LOADING_LANER };
}
