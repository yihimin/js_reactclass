import React, { useState, useEffect } from 'react';
import useCounter from './hook/useCounter';

const MAX_CAPACITY = 10;

function Accomodate(props) {
  // 전체 정원 초과 여부 상태
  const [isFull, setIsFull] = useState(false);
  // count 상태와 증가/감소 함수 받아오기
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 1) 매 렌더링마다 호출 (디버그용)
  useEffect(() => {
    console.log('==========');
    console.log('useEffect() is called.');
    console.log(`isFull: ${isFull}`);
  });

  // 2) count가 바뀔 때마다 정원 초과 여부 갱신
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>총 {count}명 수행했습니다.</p>
      <button onClick={increaseCount}>입장</button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accomodate;
