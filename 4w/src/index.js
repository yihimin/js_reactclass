import React from 'react';
import ReactDOM from 'react-dom/client';
import NumberList from './components/NumberList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberList />
  </React.StrictMode>,
);
