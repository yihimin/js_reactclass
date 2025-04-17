import React, { useState, useEffect } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    setTimeout(() => setCount((prev) => prev + 1), 1000);
  }, [count, isRunning]);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
      >
        {isRunning ? 'STOP' : 'START'}
      </button>
    </div>
  );
}

export default Counter;
