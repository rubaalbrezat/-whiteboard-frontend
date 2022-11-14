import React, { useContext, useEffect } from 'react'
import { themeContext } from '../contexs/ThemeProvider';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import cookies from 'react-cookies';
import '../App.css';
import {HStack,VStack} from '@chakra-ui/react'

function Login() {
  const { mode, setMode } = useContext(themeContext);

  useEffect(() => {
    setMode(cookies.load("mode"));
  }, []);

  return (
    <HStack className='he'>
      <VStack >
        <SigninForm />
        <SignupForm />
      </VStack>
    </HStack >
  )
}

export default Login