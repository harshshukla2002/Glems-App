import { combineReducers, createStore } from "redux";
import { reducer as jweleryReducer } from "./Jwelery Reducer/reducer";
import { reducer as watchReducer } from "./Watch Reducer/reducer";

const MainReducer = combineReducers({
  jweleryReducer,
  watchReducer,
});

export const store = createStore(MainReducer);
