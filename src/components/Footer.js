import React, { useContext } from 'react';
import '../App.css';
import { themeContext } from '../contexs/ThemeProvider';

function Footer() {
  const theme_Context = useContext(themeContext);

  return (
    <div className='fo'>
     <h4>@ruba app</h4>
    </div >
  )
}

export default Footer