import { combineReducers } from "redux";
import userReducer from "../user/userReducer";
import asyncExampleReducer from "../asyncExample/asyncExampleReducer";

const app = combineReducers({
	user: userReducer,
	asyncExample: asyncExampleReducer,
});

export default app;
