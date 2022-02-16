import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.svg';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className='rs-header rs-section-wrapper'>
        <Navbar.Brand href="/" className='d-flex align-items-center'><img src={logo} loading="lazy" alt="profile" className="rs-header__logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='rs-navbar'>
          <Nav className="align-items-center">
            <Nav.Link href="#rsSummary">Home</Nav.Link>
            <Nav.Link href="#rsFeatures">Features</Nav.Link>
            <Nav.Link href="#rsPricingPlans">Pricing</Nav.Link>
            <Nav.Link href="#rsSus">Sustainability</Nav.Link>
            <Nav.Link href="#rsFaq">FAQ</Nav.Link>
          </Nav>
          <button className='ms-auto rs-btn rs-btn--primary rs-header__btn'>Login</button>
        </Navbar.Collapse>
    </Navbar>
  )
}
export default Header