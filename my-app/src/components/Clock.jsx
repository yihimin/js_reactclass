import React from 'react';

function Clock(props) {
  return (
    <div>
      <h1>현재시간: {new Date().toLocaleTimeString()}</h1>
      <h2>
        파리 시간:{' '}
        {new Date().toLocaleString('ko', { timeZone: 'Europe/Paris' })}
      </h2>
      <h2>
        서울 시간: {new Date().toLocaleString('ko', { timeZone: 'Asia/Seoul' })}
      </h2>
      <h2>
        뉴욕 시간:{' '}
        {new Date().toLocaleString('ko', { timeZone: 'America/New_York' })}
      </h2>
    </div>
  );
}

export default Clock;
