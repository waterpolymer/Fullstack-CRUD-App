import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import studentReducer from "../store/utilities/student";
//Put reducer inside as an Object
const rootReducer = combineReducers({ studentReducer });
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);

//create store, passing in reducers
const store = createStore(rootReducer, middleware);

export default store;
