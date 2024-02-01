import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Aqui ele pega o root (elemento global do DOM) e renderiza nosso componente React App
const root = ReactDOM.createRoot(document.getElementById('root')); // Essa API é parte do React Concurrent Mode e é usada para criar uma raiz de renderização assíncrona.
root.render(
    <App />
);