import * as React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.svg';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className='rs-header'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} loading="lazy" alt="profile" className="rs-header__logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='rs-navbar'>
          <Nav className="me-auto">
            <Nav.Link href="#rsSummary">Home</Nav.Link>
            <Nav.Link href="#rsFeatures">Features</Nav.Link>
            <Nav.Link href="#features">Pricing</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <button className='rs-primary-btn rs-primary-btn--primary'>Let's Talk</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header