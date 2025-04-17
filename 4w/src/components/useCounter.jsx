import { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  // 증가 함수
  const increaseCount = () => setCount((prev) => prev + 1);
  // 감소 함수 (0 미만으로 내려가지 않도록)
  const decreaseCount = () => setCount((prev) => Math.max(prev - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
