import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommentList from './components/CommnetList';
import RoomList from './components/RoomList';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <CommentList />
      <RoomList />
    </React.StrictMode>,
  );
}, 1000);
