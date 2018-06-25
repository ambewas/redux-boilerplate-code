import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { promiseMiddleware } from "../utils";

import thunk from "redux-thunk";
import reducers from "./reducers";

const loggerMiddleware = process.env.NODE_ENV !== "production" && createLogger({
	collapsed : true,
	logger    : console,
	colors    : {
		title     : action => {
			if (action.type.endsWith("RESOLVED")) {
				return "#4DC720";
			}
			if (action.type.endsWith("REJECTED")) {
				return "#B31B1B";
			}

			return "#222222";
		},
		prevState : () => "#9E9E9E",
		action    : () => "#03A9F4",
		nextState : () => "#4CAF50",
		error     : () => "#F20404",
	},
});

// setup redux devtools chrome extension connection
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk),
		applyMiddleware(promiseMiddleware()),
		applyMiddleware(loggerMiddleware),
	)
);

export default store;
