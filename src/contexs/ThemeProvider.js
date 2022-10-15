import React, { useState } from 'react'
import cookies from 'react-cookies';
export const themeContext = React.createContext();

function ThemeProvider(props) {

  const [mode, setMode] = useState('light');

  function switchMode() {
    const currentMode = (mode === 'light') ? 'dark' : 'light';
    setMode(currentMode);
    cookies.save('mode', currentMode);
  }

  const themeStates = { mode, setMode, switchMode };

  return (
    <themeContext.Provider value={themeStates}>
      {props.children}
    </themeContext.Provider>
  )
}

export default ThemeProvider