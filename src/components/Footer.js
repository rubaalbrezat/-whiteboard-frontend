import React, { useContext } from 'react';
import { Text,HStack } from '@chakra-ui/react';
import '../App.css';
import { themeContext } from '../contexs/ThemeProvider';

function Footer() {
  const theme_Context = useContext(themeContext);

  return (
    <HStack className='fo'>
     <Text>@ruba app</Text>
    </HStack >
  )
}

export default Footer