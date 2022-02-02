import * as React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.svg';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className='rs-header'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} loading="lazy" alt="profile" className="rs-header__logo rs-slide-up" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='rs-navbar'>
          <Nav className="me-auto">
            <Nav.Link href="#rsSummary" className="rs-slide-up">Home</Nav.Link>
            <Nav.Link href="#rsFeatures" className="rs-slide-up">Features</Nav.Link>
            <Nav.Link href="#rsPricingPlans" className="rs-slide-up">Pricing</Nav.Link>
            <Nav.Link href="#rsFaq" className="rs-slide-up">FAQ</Nav.Link>
          </Nav>
          {/* <Nav>
            <button className='rs-primary-btn rs-primary-btn--primary rs-slide-up'>Let's Talk</button>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header