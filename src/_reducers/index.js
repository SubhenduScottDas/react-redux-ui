import { combineReducers } from "redux";

import { vendor } from "./vendor.reducer";

const rootReducer = combineReducers({
  vendor,
});

export default rootReducer;
