import React, { useState } from 'react';

// ✅ 컨텍스트 생성 (초기값은 객체 형태, 사용은 안 해도 됨)
const ThemeContext = React.createContext({
  color: 'light',
  toggleColor: () => {},
});

export default function ContextApi() {
  const [color, setColor] = useState('dark');

  // ✅ 버튼 클릭 시 테마 토글 함수
  const toggleColor = () => {
    setColor((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    // ✅ Provider에 객체로 value 전달
    <ThemeContext.Provider value={{ color, toggleColor }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

// ✅ 스타일 객체
const styles = {
  dark: {
    background: 'gray',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black',
  },
};

// ✅ Consumer에서 color와 toggleColor 사용
function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {({ color, toggleColor }) => (
        <button style={styles[color]} onClick={toggleColor}>
          {color === 'dark' ? '다크 모드' : '라이트 모드'}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
