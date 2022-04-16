import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.svg';

// hooks
import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled';

const Header = () => {

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  
  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  return (
    <Container fluid="lg" className={`rs-header rs-section-wrapper`}>
      <Navbar collapseOnSelect expand="lg">
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
          <button className='ms-auto rs-btn rs-btn--sm rs-btn--primary rs-header__btn'>Get Started</button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
export default Header