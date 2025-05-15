import React, { useState } from 'react';

function DoubleDisplay({ value }) {
  return (
    <div>
      <span>자식 A(*2) : {value * 2} </span>
    </div>
  );
}

function TripleDisplay({ value }) {
  return (
    <div>
      <span> 자식 B(*3) : {value * 3}</span>
    </div>
  );
}

export default function SharedState() {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div>
      부모 컴포넌트
      <input type="number" value={value} onChange={handleChange} />
      <DoubleDisplay value={value} />
      <TripleDisplay value={value} />
    </div>
  );
}
