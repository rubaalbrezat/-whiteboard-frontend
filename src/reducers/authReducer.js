import { actions } from "./actionTypes";

export const initState = {
	showSignIn: true,
	isAuth: false,
	isLogged: false,
	err: '',
}

export const authReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case actions.SIGNUP_SUCCESS:
			return {
				...state,
				showSignIn: true,
				err: '',
			}
		case actions.Login_Success:
			return {
				...state,
				isLogged: true
			}
		case actions.Login_notSuccess:
			return {
				...state,
				isLogged: false
			}
		case actions.SIGNUP_FAIL:
			return {
				...state,
				err: `${payload}`,
			}
		case actions.SHOW_SIGNUP:
			return {
				...state,
				showSignIn: false,
				err: ''
			}
		default:
			return state;
	}
};