import { actions } from "./actionTypes";

export const initState = {
	refreshMain: 0,

}

export const RefsherReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case actions.SetRefreshMain:
			return {
				...state,
				refreshMain: state + 1,
			}
		default:
			return state;
	}
};