import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/todo/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
);
