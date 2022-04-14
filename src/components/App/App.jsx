import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleThemeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`page ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <Header darkMode={darkMode} onToggleTheme={toggleThemeHandler} />
      <Main darkMode={darkMode} />
    </div>
  );
};

export default App;
