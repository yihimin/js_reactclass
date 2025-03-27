import React from 'react';

function Clock(props) {
  return (
    <div>
      <h1>{props.name} 시간</h1>
      <h2>{new Date().toLocaleTimeString('ko-KR', props.options)}</h2>
    </div>
  );
}

function WorldTime() {
  return (
    <div>
      <Clock name="파리" options={{ timeZone: 'Europe/Paris' }} />
      <Clock name="서울" options={{ timeZone: 'Asia/Seoul' }} />
      <Clock name="뉴욕" options={{ timeZone: 'America/New_York' }} />
    </div>
  );
}

export default WorldTime;
