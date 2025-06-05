import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './MyApp';
import TodoList from './TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
    <TodoList />
  </React.StrictMode>,
);
