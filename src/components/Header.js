import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexs/AuthProvider';
import cookies from "react-cookies";
import { actions } from '../reducers/actionTypes';

function Header() {

	
	// const { isLogged, setIsLogged } = useContext(AuthContext);
	const { state, dispatch } = useContext(AuthContext)


	function logOut() {
		cookies.remove('token');
		cookies.remove('username');
		cookies.remove('_id');
		cookies.remove('capabilities');
		cookies.remove('role');
		dispatch({ type: actions.Login_notSuccess })
	}

	return (
		<nav >

			<div className='lo'>
				{state.isLogged && <Link to="/" >Main</Link>}
				{state.isLogged && <button >{cookies.load('username')}</button>}
				{state.isLogged && <Link to="/login" onClick={logOut}>Logout</Link>}
			</div>
		</nav>
	)
}

export default Header