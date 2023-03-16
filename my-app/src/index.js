import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider} from "react-redux"
import { store } from './Redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider>
  <BrowserRouter>
  <Auth0Provider
    domain="dev-foi6lv677qr5xvxk.us.auth0.com"
    clientId="rALtYgPAvQWemEAbD2AxtMMqGbeDcDYC"
    redirectUri={window.location.origin}
  >
  <Provider store={store}>
  <App />
  </Provider>
  </Auth0Provider>
  </BrowserRouter>
  </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
