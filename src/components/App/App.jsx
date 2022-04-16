import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [noUserFound, setNoUserFound] = useState(false);
  const [user, setUser] = useState({});

  const handleUserSearch = async (username) => {
    setNoUserFound(false);
    try {
      let response = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
          Authorization: `token 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`,
        },
      });
      let data = await response.json();
      console.log(data);
      setUser(data);
      if (data.message) {
        setNoUserFound(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleThemeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`page ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <Header darkMode={darkMode} onToggleTheme={toggleThemeHandler} />
      <Main
        darkMode={darkMode}
        onSearchClick={handleUserSearch}
        noUser={noUserFound}
        userDetails={user}
      />
    </div>
  );
};

export default App;
