import './App.css';
import moon from '../../images/icon-moon.svg';
import search from '../../images/icon-search.svg';
import oval from '../../images/Oval.png';
import icon from '../../images/icon-company.svg';

const App = () => {
  return (
    <div className='page'>
      <header className='header'>
        <nav className='nav'>
          <h1 className='logo'>devfinder</h1>
          <button className='theme-button'>
            Dark <img src={moon} alt='' className='theme-button__icon' />
          </button>
        </nav>
      </header>
      <main className='main'>
        <form action='' className='form'>
          <img className='form__search-icon' src={search} alt='' />
          <input
            className='form__input'
            type='text'
            placeholder='Search GitHub username…'
          />
          <span className='form__error'>No results</span>
          <button className='form__button' type='submit'>
            Search
          </button>
        </form>

        <section className='info'>
          <img src={oval} alt='' className='info__image' />
          <div className='info__details'>
            <div>
              <h2 className='info__name'>The Octocat</h2>
              <p className='info__address'>@Octocat</p>
            </div>
            <p className='info__joined'>Joined 25 Jan 2011</p>
          </div>
          <p className='info__description'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <div className='info__statistics'>
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
          <div className='info__contact'>
            <div>
              <a href='#' className='info__contact-text'>
                <img src={icon} alt='' className='info__contact-icon' />
                San Francisco
              </a>

              <a href='#' className='info__contact-text'>
                <img src={icon} alt='' className='info__contact-icon' />
                https://github.blog
              </a>
            </div>
            <div>
              <a href='#' className='info__contact-text'>
                <img src={icon} alt='' className='info__contact-icon' />
                Not Available
              </a>
              <a href='#' className='info__contact-text'>
                <img src={icon} alt='' className='info__contact-icon' />
                @github
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
