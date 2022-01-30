import * as React from "react";
import { Container } from "react-bootstrap";
import logo from "../../../images/logo-white.svg";

const Footer = () => {
  return (
    <Container className="rs-footer py-5">
      <img
        src={logo}
        loading="lazy"
        alt="profile"
        className="rs-header__logo"
      />
      <ul className="d-flex mt-3 rs-footer__sm-section">
        <li className="mr-2">
          <span class="material-icons">account_circle</span>
        </li>
        <li className="mr-2">
          <span class="material-icons">account_circle</span>
        </li>
      </ul>
      <hr />
      <span>&copy; 2022 RouteSONAR. All rights reserved.</span>
    </Container>
  );
};
export default Footer;
