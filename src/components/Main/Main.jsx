import './Main.css';
import Icon from '../Icon/Icon';
import oval from '../../images/Oval.png';
import { useState } from 'react';

const Main = ({ darkMode, onSearchClick, noUser, userDetails }) => {
  const {
    avatar_url: image,
    bio,
    blog,
    company,
    created_at,
    followers,
    following,
    location,
    name,
    login,
    public_repos,
    twitter_username,
  } = userDetails;
  const [searchUser, setSearchUser] = useState('');

  const getDate = new Date(created_at).toDateString().split(' ');
  const day = getDate[2];
  const month = getDate[1];
  const year = getDate[3];

  const handleSearchUser = (evt) => {
    evt.preventDefault();
    onSearchClick(searchUser);
    // setSearchUser('');
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
        {noUser && <span className='form__error'>No results</span>}
        <button className='form__button' type='submit'>
          Search
        </button>
      </form>

      <section className={darkMode ? 'info info_light' : 'info'}>
        <img src={image || oval} alt={name || ''} className='info__image' />
        <div className='info__details'>
          <div>
            <h2
              className={
                darkMode ? 'info__name info__name_light' : 'info__name'
              }
            >
              {name || 'Developer Name'}
            </h2>
            <p className='info__address'>@{login || 'login'}</p>
          </div>
          <p className='info__joined'>
            Joined {day} {month} {year}
          </p>
        </div>
        <p className='info__description'>{bio || `Developer's short bio`}</p>
        <div
          className={
            darkMode
              ? 'info__statistics info__statistics_light'
              : 'info__statistics'
          }
        >
          <div>
            <h3 className='info__statistics-header'>Repos</h3>
            <p className='info__statistics-number'>{public_repos || '0'}</p>
          </div>
          <div>
            <h3 className='info__statistics-header'>Followers</h3>
            <p className='info__statistics-number'>{followers || '0'}</p>
          </div>
          <div>
            <h3 className='info__statistics-header'>Following</h3>
            <p className='info__statistics-number'>{following || '0'}</p>
          </div>
        </div>
        <div
          className={
            darkMode ? 'info__contact info__contact_light' : 'info__contact'
          }
        >
          <div>
            <div
              className={
                location === null
                  ? 'info__contact-container info__contact-container_disabled'
                  : 'info__contact-container'
              }
            >
              <Icon
                name='location'
                height='20'
                width='20'
                className='info__contact-icon'
              />
              <a href='#' className='info__contact-text'>
                {location === null ? 'Not Available' : location || 'location'}
              </a>
            </div>
            <div
              className={
                blog === null
                  ? 'info__contact-container info__contact-container_disabled'
                  : 'info__contact-container'
              }
            >
              <Icon
                name='website'
                height='20'
                width='20'
                className='info__contact-icon'
              />
              <a href='#' className='info__contact-text'>
                {blog === null ? 'Not Available' : blog || 'Website'}
              </a>
            </div>
          </div>
          <div>
            <div
              className={
                twitter_username === null
                  ? 'info__contact-container info__contact-container_disabled'
                  : 'info__contact-container'
              }
            >
              <Icon
                name='twitter'
                height='20'
                width='20'
                className='info__contact-icon'
              />
              <a href='#' className='info__contact-text'>
                {twitter_username === null
                  ? 'Not Available'
                  : twitter_username || 'Twitter'}
              </a>
            </div>
            <div
              className={
                company === null
                  ? 'info__contact-container info__contact-container_disabled'
                  : 'info__contact-container'
              }
            >
              <Icon
                name='company'
                height='20'
                width='20'
                className='info__contact-icon'
              />
              <a href='#' className='info__contact-text'>
                {company === null
                  ? 'Not Available'
                  : `@${company}` || 'Company'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
