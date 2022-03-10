import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from '../src/common/Context';


ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
    
  </React.StrictMode>,
  document.getElementById('root')
);

