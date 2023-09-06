import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tittle from './components/Tittle/Tittle';


const root = ReactDOM.createRoot(document.getElementById('react-app'));



root.render(
  <>
    <Tittle />
    <App />
  </>
);