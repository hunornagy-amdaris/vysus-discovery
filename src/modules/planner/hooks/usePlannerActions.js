import { usePlannerData } from "@/modules/planner/hooks/usePlannerData";
import { PLANNER_STORE_CONSTANTS } from "@/modules/planner/constants/plannerStoreConstants";

export const usePlannerActions = () => {
  const { dispatch } = usePlannerData();

  return {
    addLayer: (layer) => {
      dispatch({ type: PLANNER_STORE_CONSTANTS.ADD_LAYER, payload: layer });
    },
    addElement: (element) => {
      dispatch({ type: PLANNER_STORE_CONSTANTS.ADD_ITEM, payload: element });
    },
    editElement: (element) => {
      dispatch({ type: PLANNER_STORE_CONSTANTS.EDIT_ITEM, payload: element });
    },
    deleteElement: (element) => {
      dispatch({ type: PLANNER_STORE_CONSTANTS.DELETE_ITEM, payload: element });
    },
    setCurrentLayer: (layer) => {
      dispatch({
        type: PLANNER_STORE_CONSTANTS.SET_CURRENT_LAYER,
        payload: layer,
      });
    },
  };
};
