import React from "react";

export default function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return (
    <div style={{ margin: 10 }}>
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
      {isLoggedIn && <span>환영합니다! </span>}
    </div>
  );
}
