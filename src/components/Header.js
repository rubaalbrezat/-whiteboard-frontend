import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../contexs/ThemeProvider';
import { AuthContext } from '../contexs/AuthProvider';
import cookies from "react-cookies";


function Header() {

  const theme_Context = useContext(themeContext);
  const { isLogged, setIsLogged } = useContext(AuthContext);

  function logOut() {
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('_id');
    setIsLogged(false);
  }

  return (
    <nav >
      
      <div className='lo'>
        {isLogged && <Link to="/" >Main</Link>}
        {isLogged && <button >{cookies.load('username')}</button>}
        {isLogged && <Link to="/login"  onClick={logOut}>Logout</Link>}
 </div>
    </nav>
  )
}

export default Header