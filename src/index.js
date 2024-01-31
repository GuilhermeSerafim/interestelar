import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Aqui ele pega o root (elemento global do DOM) e renderiza nosso componente React App
const root = ReactDOM.createRoot(document.getElementById('root')); // Essa API é parte do React Concurrent Mode e é usada para criar uma raiz de renderização assíncrona.
root.render(
    <App />
);