import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import RouteSwitch from './RouteSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouteSwitch />
  // </React.StrictMode>
);
