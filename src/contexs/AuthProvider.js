import React, { useState, useReducer } from 'react'
import cookies from 'react-cookies';
import { authReducer, initState } from '../reducers/authReducer';


export const AuthContext = React.createContext();


function AuthProvider(props) {
	// const [isLogged, setIsLogged] = useState(() => false);
	const [state, dispatch] = useReducer(authReducer, initState)

	console.log(state)

	const cab = cookies.load("capabilities");

	function canDo(capability) {
		return (cab?.includes(capability))
	}

	const AuthContextData = { state, dispatch, canDo };


	return (
		<AuthContext.Provider value={AuthContextData}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthProvider