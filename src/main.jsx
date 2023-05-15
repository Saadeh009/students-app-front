import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { CssBaseline } from "@mui/material";
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
		<ThemeProvider theme={theme}>
		<CssBaseline />
		<BrowserRouter>
		<App />
		</BrowserRouter>
		</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
