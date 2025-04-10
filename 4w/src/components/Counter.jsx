import React, { useState } from 'react';

function Counter(props) {
  //let count = 0;
  // state 선언
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button
        onClick={() => {
          //count++;
          setCount(count + 1); // 상태를 업데이트!
          console.log(count); // 콘솔에는 이전 값이 찍히는 점 주의!
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default Counter;
