import React, { useEffect, useContext } from 'react';
import cookies from 'react-cookies';
import {Text,HStack} from '@chakra-ui/react'
import { themeContext } from '../contexs/ThemeProvider';



function About() {

  const { mode, setMode } = useContext(themeContext);
  
  useEffect(() => {
    const token = cookies.load("token");
    setMode(cookies.load("mode"))
  }, []);

  return (
    <HStack>
      <Text>Hello im ruba </Text>
    </HStack>
  )
}

export default About