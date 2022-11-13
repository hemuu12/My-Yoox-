import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import CartContextProvider from "./components/cartx/cartprovider"
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider>
  <BrowserRouter>
  <Auth0Provider
    domain="dev-134lw8smgkmt52qx.uk.auth0.com"
    clientId="I5hRXeC03TFxnW1GTJxD2vC4lW0fem77"
    redirectUri={window.location.origin}
  >
  <CartContextProvider>
  <App />
  </CartContextProvider>
  </Auth0Provider>
  </BrowserRouter>
  </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
