import { axiosAPI } from "../../helpers";

/**
|--------------------------------------------------
| action types
|--------------------------------------------------
*/

export const actionTypes = Object.freeze({
	TYPE: "USER",
	USER_LOGIN: "USER/LOGIN",
	USER_LOGOUT: "USER/LOGOUT",
	USER_GET: "USER/GET",
});

/**
|--------------------------------------------------
| action creators
|--------------------------------------------------
*/
export const getUser = () => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.USER_GET,
			isLoading: true,
		});

		return new Promise((resolve, reject) => {
			axiosAPI
				.get(
					"private/user",
				)
				.then((result) => {
					dispatch({
						type: actionTypes.USER_GET,
						data: result.data,
						isLoading: false,
					});

					resolve();
				})
				.catch((error) => {
					reject(error);
				});
		});
	};
};

export const logout = () => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			axiosAPI
				.get(
					"private/user/logout",
				)
				.then(() => {
					dispatch({
						type: actionTypes.USER_LOGOUT,
					});

					resolve();
				})
				.catch((error) => {
					reject(error);
				});
		});
	};
};
