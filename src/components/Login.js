import React, { useContext, useEffect } from 'react'
import { themeContext } from '../contexs/ThemeProvider';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import cookies from 'react-cookies';
import '../App.css';

function Login() {
  const { mode, setMode } = useContext(themeContext);

  useEffect(() => {
    setMode(cookies.load("mode"));
  }, []);

  return (
    <div className='he'>
      <div >
        <SigninForm />
        <SignupForm />
      </div>
    </div >
  )
}

export default Login