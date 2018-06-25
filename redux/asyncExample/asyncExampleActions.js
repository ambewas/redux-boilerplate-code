import { asyncService } from "../services";
import { getAsyncActionTypes } from "../utils";

// define resolved, pending and rejected action types as well trough getAsyncActionTypes
// we'll be using these in our reducers.
export const actionTypes = getAsyncActionTypes("ASYNC_EXAMPLE");

// when dispatching a promise from a service, assign it to the `payload` key of your actions
// this ensures it gets intercepted by the promise middleware, which will take care of resolved, pending and rejected states.
export const asyncExample = () => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.ASYNC_EXAMPLE,
			payload: asyncService.getAsyncExample(),
		});
	};
};
