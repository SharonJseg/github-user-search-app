import './Header.css';
import Icon from '../Icon/Icon';

const Header = ({ darkMode, onToggleTheme }) => {
  return (
    <header className='header'>
      <nav className='nav'>
        <h1 className={darkMode ? 'logo' : 'logo logo__light'}>devfinder</h1>
        {!darkMode ? (
          <button className='theme-button' onClick={onToggleTheme}>
            Dark
            <Icon
              name='moon'
              height='20'
              width='20'
              className='theme-button__icon'
            />
          </button>
        ) : (
          <button
            className='theme-button theme-button_light'
            onClick={onToggleTheme}
          >
            Light
            <Icon
              name='sun'
              height='20'
              width='20'
              className='theme-button__icon'
            />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
