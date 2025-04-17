import React, { useState, useMemo } from 'react';
function BigSquare() {
  const [number, setNumber] = useState(0); // 제곱 계산 입력값
  const [count, setCount] = useState(0); // “+1”버튼 클릭시 증가값

  // 느리게 계산되는 제곱 함수 (예제용으로 일부러 지연)
  const slowSquare = (num) => {
    console.log('계산 중...'); //클릭할 때마다 “계산 중...”이 찍힘
    let result = 0;
    for (let i = 0; i < 2500000000; i++) {
      //엄청 큰 루프를 돌림
      result = num * num;
    }
    return result;
  };

  // useMemo로 계산 결과를 메모이제이션
  const squared = useMemo(() => slowSquare(number), [number]);
  return (
    <div>
      <h2>느린 제곱 계산기</h2>

      {/* 1) 제곱 입력값 */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      {/* 2) 느린 계산 결과(메모이제이션 덕분에 number 변경 시에만 갱신) */}
      <p>제곱 결과: {squared}</p>

      {/* 3) 별개 카운터(빠른 업데이트!) */}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
export default BigSquare;
