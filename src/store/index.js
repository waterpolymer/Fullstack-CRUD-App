import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import studentReducer from "../store/utilities/student";
import campusReducer from "../store/utilities/campus";

//Put reducer inside as an Object
const rootReducer = combineReducers({ studentReducer, campusReducer });
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, logger)
);

//create store, passing in reducers
const store = createStore(rootReducer, middleware);

export default store;

// barrel
export { default as addStudent } from "./utilities/student";
export { default as removeStudent } from "./utilities/student";
export { default as fetchStudentsThunk } from "./utilities/student";
export { default as addCampus } from "./utilities/campus";
export { default as removeCampus } from "./utilities/campus";
export { default as fetchCampusesThunk } from "./utilities/campus";
