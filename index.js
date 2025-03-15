import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import './index.scss';
import App from './app.js';

const root = document.getElementById('root');

createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
