import { useState, useCallback } from 'react';
import ThemeContext from './ThemeContext';
import MainContent from './MainContent';

function DarkOrLight() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('kor');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, language, setLanguage }}
    >
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
