import { createSlice } from "@reduxjs/toolkit";

const initState = {
	showSignIn: true,
	isAuth: false,
	isLogged: false,
	err: '',
};

export const authRedux = createSlice( {

	name: 'redux',
	initState,
	reducers: {
		SIGNUP: (state, action) => {
			state.showSignIn = true;
				state.err = ''

		},
		Login: (state, action) => {
			state.isLogged = true

		},
		LoginNotSuccess: (state, action) => {
			state.isLogged = false

		},
		
		SIGNUPFAIL: (state, action) => {
			state.err = action.payload.message

		},
		SHOWSIGNUP: (state, action) => {
			state.showSignIn = false
			state.err = ''
		},
	
	}

})

export const{
	SIGNUP,
	Login,
	LoginNotSuccess,
	SIGNUPFAIL,
	SHOWSIGNUP


}=authRedux.actions

export default authRedux.reducer






