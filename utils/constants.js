export const ASSETS_PATHS = {
  ROLES: {
    TOP: '/Position_Master-Top.png',
    JUNGLE: '/Position_Master-Jungle.png',
    MID: '/Position_Master-Mid.png',
    ADC: '/Position_Master-Bot.png',
    SUP: '/Position_Master-Support.png',
  },
};

export const ROLE_NUMBERS = {
  TOP: 1,
  JUNGLE: 2,
  MID: 3,
  ADC: 4,
  SUP: 5,
};

export const TABLES = {
  CHAMPIONS: 'champions',
  CHAMPION_ROLES: 'champion_roles',
  ROLES: 'roles',
};

export const ACTIONS_USE_LOADING_LANER = {
  TOP_LOAD: 'topLoad',
  JG_LOAD: 'jgLoad',
  MID_LOAD: 'midLoad',
  ADC_LOAD: 'adcLoad',
  SUP_LOAD: 'supLoad',
  TOP_UNLOAD: 'topUnload',
  JG_UNLOAD: 'jgUnload',
  MID_UNLOAD: 'midUnload',
  ADC_UNLOAD: 'adcUnload',
  SUP_UNLOAD: 'supUnload',
};

export const STATES_KEYS_BY_ACTIONS = {
  [ACTIONS_USE_LOADING_LANER.TOP_LOAD]: 'TOP_LOADER',
  [ACTIONS_USE_LOADING_LANER.JG_LOAD]: 'JUNGLE_LOADER',
  [ACTIONS_USE_LOADING_LANER.MID_LOAD]: 'MID_LOADER',
  [ACTIONS_USE_LOADING_LANER.ADC_LOAD]: 'ADC_LOADER',
  [ACTIONS_USE_LOADING_LANER.SUP_LOAD]: 'SUP_LOADER',
  [ACTIONS_USE_LOADING_LANER.TOP_UNLOAD]: 'TOP_LOADER',
  [ACTIONS_USE_LOADING_LANER.JG_UNLOAD]: 'JUNGLE_LOADER',
  [ACTIONS_USE_LOADING_LANER.MID_UNLOAD]: 'MID_LOADER',
  [ACTIONS_USE_LOADING_LANER.ADC_UNLOAD]: 'ADC_LOADER',
  [ACTIONS_USE_LOADING_LANER.SUP_UNLOAD]: 'SUP_LOADER',
};
