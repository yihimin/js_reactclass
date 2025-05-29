import React, { useState } from 'react';

export default function FetchGetExample() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const clickGetHandler = () => {
    fetch('http://localhost:3001/data?name=Himin&age=29', {
      method: 'GET',
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const clickPostHandler = () => {
    fetch('http://localhost:3001/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Himin', age: 29 }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h1>Fetch Get 요청 예시</h1>
      {error && <p style={{ color: 'red' }}> 에러: {error}</p>}
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
