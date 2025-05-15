import React, { useState } from 'react';

function ComponentC({ temp, changeTemp }) {
  return (
    <div>
      <span>단위(섭씨): </span>
      <input
        type="number"
        value={temp}
        onChange={(e) => changeTemp(e.target.value)}
      />
    </div>
  );
}

function ComponentF({ temp, changeTemp }) {
  return (
    <div>
      <span>단위(화씨): </span>
      <input
        type="number"
        value={temp}
        onChange={(e) => changeTemp(e.target.value)}
      />
    </div>
  );
}

export default function Calculator() {
  const [temperature, setTemperature] = useState(0);
  const [type, setType] = useState('c');

  const toFahrenheit = (celsius) => {
    return ((celsius * 9) / 5 + 32).toFixed(1);
  };
  const toCelsius = (fahrenheit) => {
    return (((fahrenheit - 32) * 5) / 9).toFixed(1);
  };
  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setType('c');
  };
  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setType('f');
  };
  const celsius = type === 'c' ? temperature : toCelsius(temperature);
  const fahrenheit = type === 'f' ? temperature : toFahrenheit(temperature);
  return (
    <div>
      <h2>온도 변환</h2>
      <ComponentC temp={celsius} changeTemp={handleCelsiusChange} />
      <ComponentF temp={fahrenheit} changeTemp={handleFahrenheitChange} />
      {celsius > 99 ? '물이 끓습니다' : '물이 끓지 않습니다'}
    </div>
  );
}
