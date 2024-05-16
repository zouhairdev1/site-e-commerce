import { legacy_createStore } from "redux";

import rootReducer from "../reducers/allReducer";
export const store = legacy_createStore(rootReducer);
