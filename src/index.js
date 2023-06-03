import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';


ReactDOM.render( 
  <BrowserRouter>
    <StyledEngineProvider >
      <App />
    </StyledEngineProvider>
  </BrowserRouter>
 ,
  document.getElementById('root')
);


