import { useEffect } from 'react';
import { supabaseService } from '../services';

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
