import { actionTypes } from "../user/userActions";
import { progressReducer } from "../utils/index";

const reducer = (state = {}, action) => {
	switch (action.type) {
		// case actionTypes.USER_LOGGED_IN:
		// 	return {
		// 		userToken: action.token,
		// 	};
		case actionTypes.USER_GET:
			return action.data;

		case actionTypes.USER_LOGOUT:
			return {};

		default:
			return state;
	}
};

const userReducer = progressReducer(actionTypes.TYPE, reducer);

export default userReducer;
