import React, { useState } from 'react';
import axios from 'axios';
export default function AxiosExample() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const clickGetHandler = () => {
    axios
      .get('http://localhost:3001/data', {
        params: { name: 'Himin', age: 29 },
      })
      .then((res) => {
        console.log(res);
        setData(res.data); // 응답 본문
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const clickPostHandler = () => {
    axios
      .post('http://localhost:3001/data', {
        name: 'Himin',
        age: 29,
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h1>Axios GET/POST 요청 예시</h1>
      {error && <p style={{ color: 'red' }}>에러: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>데이터 불러오는 중...</p>
      )}
      <button onClick={clickGetHandler}>요청(GET)</button>
      <button onClick={clickPostHandler}>요청(POST)</button>
    </div>
  );
}
