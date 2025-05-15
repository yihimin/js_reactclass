import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function MainContent() {
  const { theme, toggleTheme, language, setLanguage } =
    useContext(ThemeContext);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '1.5rem',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      <p>테마 변경이 가능한 웹사이트입니다</p>
      <button onClick={toggleTheme}>테마 변경</button>
      <p>{language === 'kor' ? '안녕하세요' : 'Hello'}</p>
      <label>
        언어:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="kor">한글</option>
          <option value="eng">영어</option>
        </select>
      </label>
    </div>
  );
}

export default MainContent;
