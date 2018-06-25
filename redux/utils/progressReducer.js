import verifyAction from "../utils/verifyAction";

export default (type = "", reducer = (state, action) => state) => ( // eslint-disable-line no-unused-vars
	state = {
		isLoading: false,
		created: null,
		lastUpdated: null,
		error: null,
		result: null,
	},
	{
		err = null,
		isLoading = false,
		...action
	} = {}
) => {
	if (!verifyAction(type, action)) {
		return state;
	}

	const resultState = state ? state.result : null;
	const createdState = state ? state.created : null;
	const lastUpdatedState = state ? state.lastUpdated : null;

	const newState = (isLoading || err !== null) ? null : reducer(resultState, action);
	const created = createdState || new Date();
	const lastUpdated = (!lastUpdatedState || newState !== resultState) ? new Date() : lastUpdatedState;

	return {
		isLoading,
		created,
		lastUpdated,
		error: err,
		result: newState,
	};
};
