import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert' 
import AlertTemplate from 'react-alert-template-basic'

ReactDOM.render(
  <AlertProvider template = {AlertTemplate}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AlertProvider>,
  document.getElementById('root')
);




