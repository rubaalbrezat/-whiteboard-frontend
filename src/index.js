import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
import { NewTheme } from './theme';
// import { Provider } from 'react-redux';
// import { store } from './authRedux/store'
// import { refStore } from './RefrechRedux/store'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

const theme = extendTheme({ config })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ChakraProvider theme={NewTheme}>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />

					<App />
		</ChakraProvider>
	</React.StrictMode>
);
//_______________________________
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
