import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Aqui ele pega o root (elemento global do DOM) e renderiza nosso componente React App
const root = ReactDOM.createRoot(document.getElementById('root')); // Essa API é parte do React Concurrent Mode e é usada para criar uma raiz de renderização assíncrona.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
