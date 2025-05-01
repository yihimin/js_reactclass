import React, { useState } from "react";
import Toolbar from "./Toolbar";
import TodoList from "./todo/TodoList";

export default function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <hr />
      {isLoggedIn ? (
        <TodoList />
      ) : (
        <div style={{ padding: 10 }}>서비스를 이용하려면 로그인하세요!</div>
      )}
    </div>
  );
}
