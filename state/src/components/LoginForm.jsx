import React, { useState } from 'react';
import axios from 'axios';
export default function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);

  const handleLogin = () => {
    axios
      .post('http://localhost:3001/login', {
        id: id,
        password: password,
      })
      .then((response) => {
        setResult(response.data.message);
      })
      .catch((error) => {
        setResult(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>로그인 </button>
      <p>{result}</p>
    </div>
  );
}
