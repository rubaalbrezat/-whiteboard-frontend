import { HStack,Button,Text ,useColorMode} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexs/AuthProvider';
import cookies from "react-cookies";
import { actions } from '../reducers/actionTypes';

function Header() {

	
	// const { isLogged, setIsLogged } = useContext(AuthContext);
	const { state, dispatch } = useContext(AuthContext)
	const { colorMode } = useColorMode();

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

			<HStack className='lo' p='3' bg={colorMode === "light" ? "green.500" : "blue.800"} shadow='md'>
				{state.isLogged && <Link to="/" >Main</Link>}
				{state.isLogged && <Button >{cookies.load('username')}</Button>}
				{state.isLogged && <Text to="/login" onClick={logOut}>Logout</Text>}
			</HStack>
		</nav>
	)
}

export default Header