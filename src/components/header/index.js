import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.svg';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className='rs-header'>
        <Navbar.Brand href="#home"><img src={logo} loading="lazy" alt="profile" className="rs-header__logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='rs-navbar'>
          <Nav className="ms-auto ">
            <Nav.Link href="#rsSummary" className="rs-slide-up">Home</Nav.Link>
            <Nav.Link href="#rsFeatures" className="rs-slide-up">Features</Nav.Link>
            <Nav.Link href="#rsPricingPlans" className="rs-slide-up">Pricing</Nav.Link>
            <Nav.Link href="#rsSus" className="rs-slide-up">Sustainability</Nav.Link>
            <Nav.Link href="#rsFaq" className="rs-slide-up">FAQ</Nav.Link>
            <button className='rs-btn rs-btn--primary rs-header__btn'>Let's Talk</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
export default Header