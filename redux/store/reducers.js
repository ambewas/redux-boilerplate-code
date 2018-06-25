import { combineReducers } from "redux";
import asyncExampleReducer from "../asyncExample/asyncExampleReducer";

const app = combineReducers({
	asyncExample: asyncExampleReducer,
});

export default app;
