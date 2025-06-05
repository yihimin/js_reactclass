import { useState } from 'react';

export default function MyAppTs() {
  const [value, setValue] = useState('Init string');
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    alert('click');
  }
  return (
    <div>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
