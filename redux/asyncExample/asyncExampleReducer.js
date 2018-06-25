import { actionTypes } from "./asyncExampleActions";

const defaultState = {
	exampleData: {},
	isLoading: false,
	isError: false,
};

const asyncExampleReducer = (state = defaultState, action) => {
	switch (action.type) {
		// the promise middleware makes sure the action ASYNC_EXAMPLE is padded with _PENDING, _RESOLVED, _REJECTED, which are all dispatched automatically
		// it's these actions we will then catch in our reducer.
		// this makes managing loading, success and error states easier, with less boilerplate
		case actionTypes.ASYNC_EXAMPLE_PENDING:
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case actionTypes.ASYNC_EXAMPLE_RESOLVED:
			return {
				...state,
				exampleData: action.payload,
				isLoading: false,
				isError: false,
			};

		case actionTypes.ASYNC_EXAMPLE_REJECTED:
			return {
				...state,
				exampleData: action.payload,
				isLoading: false,
				isError: true,
			};

		default:
			return state;
	}
};

export default asyncExampleReducer;
