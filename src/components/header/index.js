import * as React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {

  return (
    <header className='rs-header rs-wrapper'>
        <picture>
          <img src={logo} loading="lazy" alt="profile" className="rs-header__logo" />
        </picture>
        <nav>
          <ul className='rs-nav-menu'>
            <li className='rs-nav-menu__item'><a>Home</a></li>
            <li className='rs-nav-menu__item'><a>Features</a></li>
            <li className='rs-nav-menu__item'><a>Pricing</a></li>
            <li className='rs-nav-menu__item'><a>FAQ</a></li>
          </ul>
        </nav>
        <button className='rs-primary-btn rs-primary-btn--primary'>Let's Talk</button>
        <a href="" className="rs-header__menu">
          <span className="material-icons">menu</span>
        </a>
    </header>
  )
}
export default Header