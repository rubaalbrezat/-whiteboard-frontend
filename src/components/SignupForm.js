import React from 'react';
import axios from 'axios';
import { Input } from '@chakra-ui/react';

function SignupForm() {

	async function signUp(e) {
		e.preventDefault();
		if (e.target.confirmPassword.value !== e.target.passwordsu.value) {
			alert(`Password doesn't match`)
		} else {
			const url = `${process.env.REACT_APP_SERVER}/signup`;
			console.log(url)

			const user = {
				username: e.target.usernamesu.value,
				email: e.target.email.value,
				password: e.target.confirmPassword.value
			};
			const addedUser = await axios.post(url, user);
			console.log(addedUser.data);
		}
	}

	return (
		<form onSubmit={signUp}>
			<fieldset >
				<legend>Sign Up</legend>
				<Input type='text' className='formField' placeholder='Username' id='usernamesu' required></Input>
				<Input type='text' className='formField' placeholder='E-mail' id='email' required></Input>
				<Input type='password' className='formField' placeholder='Password' id='passwordsu' required></Input>
				<Input type='password' className='formField' placeholder='Confirm Password' id='confirmPassword' required autoComplete='off'></Input>
				<Input type='submit' className='button' value='signUp' bg='secondery.400'></Input>
			</fieldset>
		</form>
	)
}

export default SignupForm