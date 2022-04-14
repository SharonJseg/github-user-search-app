import './Main.css';
import Icon from '../Icon/Icon';
import oval from '../../images/Oval.png';
import { useState } from 'react';

const Main = ({ darkMode }) => {
  const [searchUser, setSearchUser] = useState('');

  const handleSearchUser = (evt) => {
    evt.preventDefault();
    setSearchUser('');
  };

  return (
    <main className='main'>
      <form
        className={darkMode ? 'form form_light' : 'form'}
        onSubmit={handleSearchUser}
      >
        <Icon
          name='search'
          width='24'
          height='24'
          className='form__search-icon'
        />
        <input
          className={darkMode ? 'form__input form__input_light' : 'form__input'}
          type='text'
          placeholder='Search GitHub username…'
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <span className='form__error'>No results</span>
        <button className='form__button' type='submit'>
          Search
        </button>
      </form>

      <section className={darkMode ? 'info info_light' : 'info'}>
        <img src={oval} alt='' className='info__image' />
        <div className='info__details'>
          <div>
            <h2
              className={
                darkMode ? 'info__name info__name_light' : 'info__name'
              }
            >
              The Octocat
            </h2>
            <p className='info__address'>@Octocat</p>
          </div>
          <p className='info__joined'>Joined 25 Jan 2011</p>
        </div>
        <p className='info__description'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div
          className={
            darkMode
              ? 'info__statistics info__statistics_light'
              : 'info__statistics'
          }
        >
          <div>
            <h3 className='info__statistics-header'>Repos</h3>
            <p className='info__statistics-number'>8</p>
          </div>
          <div>
            <h3 className='info__statistics-header'>Followers</h3>
            <p className='info__statistics-number'>3938</p>
          </div>
          <div>
            <h3 className='info__statistics-header'>Following</h3>
            <p className='info__statistics-number'>9</p>
          </div>
        </div>
        <div
          className={
            darkMode ? 'info__contact info__contact_light' : 'info__contact'
          }
        >
          <div>
            <a href='#' className='info__contact-text'>
              <Icon
                name='location'
                height='20'
                width='20'
                className='info__contact-icon'
              />
              San Francisco
            </a>

            <a href='#' className='info__contact-text'>
              <Icon
                name='website'
                height='20'
                width='20'
                className='info__contact-icon'
              />
              https://github.blog
            </a>
          </div>
          <div>
            <a href='#' className='info__contact-text'>
              <Icon
                name='twitter'
                height='20'
                width='20'
                className='info__contact-icon'
              />
              Not Available
            </a>
            <a href='#' className='info__contact-text'>
              <Icon
                name='company'
                height='20'
                width='20'
                className='info__contact-icon'
              />
              @github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
