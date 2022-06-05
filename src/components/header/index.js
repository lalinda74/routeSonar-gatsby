import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import logo from '../../images/logo.svg';
import { navigate } from 'gatsby';

const Header = () => {

  const viewContactPage = () => {
    navigate('/privacyPolicy');
  };

  return (
    <Container fluid="lg" className={`rs-header rs-section-wrapper`}>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/" className='d-flex align-items-center'><img src={logo} loading="lazy" alt="profile" className="rs-header__logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='rs-navbar rs-navbar--res'>
          <Nav className="align-items-center fade-in">
            <Nav.Link href="#rsFeatures">Features</Nav.Link>
            <Nav.Link href="#rsPricingPlans">Pricing</Nav.Link>
            <Nav.Link href="#rsSus">Sustainability</Nav.Link>
            <Nav.Link href="#rsFaq">FAQ</Nav.Link>
            <Nav.Link onClick={() => viewContactPage()}>Terms of Service</Nav.Link>
          </Nav>
          <button className='ms-auto rs-btn rs-btn--sm rs-btn--primary rs-header__btn'>Get Started</button>
        </Navbar.Collapse>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="top"
        >
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar.Collapse id="responsive-navbar-nav" className='rs-navbar'>
              <Nav className="align-items-center fade-in">
                <Nav.Link href="#rsSummary">Home</Nav.Link>
                <Nav.Link href="#rsFeatures">Features</Nav.Link>
                <Nav.Link href="#rsPricingPlans">Pricing</Nav.Link>
                <Nav.Link href="#rsSus">Sustainability</Nav.Link>
                <Nav.Link href="#rsFaq">FAQ</Nav.Link>
                <Nav.Link onClick={() => viewContactPage()}>Terms of Service</Nav.Link>
              </Nav>
              <button className='ms-auto rs-btn rs-btn--sm rs-btn--primary rs-header__btn'>Get Started</button>
            </Navbar.Collapse>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </Container>
  )
}
export default Header;