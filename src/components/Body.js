import { Stack } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function Body() {
  return (
    <Stack>
      
      <Header />
      <Main />
      <Footer />
      
    </Stack>
  )
}

export default Body