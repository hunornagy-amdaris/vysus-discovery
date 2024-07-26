import { createContext, useReducer } from "react";
import PlannerReducer from "@/modules/planner/store/reducer/PlannerReducer";
import PropTypes from "prop-types";
const initialState = {
  dispatch: () => {},
  layers: [
    {
      id: "layer1",
      name: "Layer 1",
      visible: true,
      locked: false,
    },
  ],
  elements: [],
  currentLayer: {},
};

export const PlannerContext = createContext({
  ...initialState,
});

export const PlannerProvider = ({ children }) => {
  const [stateForm, dispatchStateForm] = useReducer(
    PlannerReducer,
    initialState,
  );

  return (
    <PlannerContext.Provider
      value={{
        ...stateForm,
        dispatch: dispatchStateForm,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};

PlannerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const contextStateShape = PropTypes.shape({
  dispatch: PropTypes.func,
});

PlannerContext.propTypes = {
  state: contextStateShape.isRequired,
};

export default PlannerProvider;
