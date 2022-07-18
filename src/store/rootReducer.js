import { combineReducers } from "redux";

import aberturasReducer from "./slices/aberturas/aberturas";
import equipamientoReducer from "./slices/equipamiento/equipamiento";
import terminacionesReducer from "./slices/terminaciones/terminaciones";

const appReducer = combineReducers({
  aberturasReducer,
  equipamientoReducer,
  terminacionesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "destroy_session") state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
