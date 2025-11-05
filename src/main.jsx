// src/main.jsx (Verifique se o seu arquivo é igual a este)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css'; // O CSS global deve ser importado aqui!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);