import * as React from "react";
import { Container } from "react-bootstrap";
import logo from "../../../images/logo-white.svg";
import FBIcon from "../../../images/fb.svg";

const Footer = () => {
  return (
    <Container className="rs-footer rs-section-w rs-section-w--pad py-5" id="rsFooter">
      <div className="d-flex align-items-center justify-content-between">
        <img
          src={logo}
          loading="lazy"
          alt="profile"
          className="rs-header__logo"
        />
        <small className="rs-grey-txt">
          Find us on:{" "}
          <a href="https://www.facebook.com/RouteSonar" target="_blank" rel="noreferrer">
            <img src={FBIcon} alt="Facebook" className="rs-footer__sm-icon" />
          </a>
        </small>
      </div>
      <hr />
      <small className="rs-grey-txt">
        &copy; 2022 RouteSONAR. All rights reserved.
      </small>
    </Container>
  );
};
export default Footer;
