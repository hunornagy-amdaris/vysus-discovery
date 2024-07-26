import { PLANNER_STORE_CONSTANTS } from "@/modules/planner/constants/plannerStoreConstants";

const PlannerReducer = (state, action) => {
  switch (action.type) {
    case PLANNER_STORE_CONSTANTS.ADD_LAYER:
      return {
        ...state,
        layers: [...state.layers, action.payload],
      };
    case PLANNER_STORE_CONSTANTS.ADD_ITEM:
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case PLANNER_STORE_CONSTANTS.EDIT_ITEM:
      return {
        ...state,
        elements: state.elements.map((element) => {
          if (element.id === action.payload.id) {
            return {
              ...element,
              ...action.payload,
            };
          }
          return element;
        }),
      };
    case PLANNER_STORE_CONSTANTS.DELETE_ITEM:
      return {
        ...state,
        elements: state.elements.filter(
          (element) => element.id !== action.payload.id,
        ),
      };
    case PLANNER_STORE_CONSTANTS.SET_CURRENT_LAYER:
      return {
        ...state,
        currentLayer: action.payload,
      };

    case PLANNER_STORE_CONSTANTS.UPDATE_CANVAS:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default PlannerReducer;
