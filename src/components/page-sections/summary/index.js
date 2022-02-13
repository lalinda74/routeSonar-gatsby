import * as React from "react";
import { Container } from "react-bootstrap";
// import Slider from '../../../images/slider1.jpg';
import DFTLogo from "../../../images/DFT-logo.png";
import ECHELONLogo from "../../../images/ECHELON-logo.jpeg";
import ImageSlider from "../../objects/image-slider";

const Summary = () => {
  return (
    <Container className="rs-summary rs-section-wrapper">
      <div className="row">
        <div className="rs-summary__left col-xs-12 col-md-6 order-2 order-md-1">
          <div className="mt-4">
            <h1 className="rs-summary__title">
              Smart route planning for efficient and sustainable last mile
              deliveries
            </h1>
            <p className="my-md-5 rs-summary__desc">
              RouteSonar helps you improve your on road efficiency by more than
              20% while enabling you to accommodate more orders.
            </p>
            <div className="pb-5 rs-summary__action-wrapper">
              <button className="rs-btn rs-btn--primary-variant mt-4 d-flex align-items-center rs-slide-up">
                Book a Demo
                <span className="material-icons rs-btn__icon">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </div>
          <div className="rs-featured">
            <h6>Featured on</h6>
            <picture>
              <img
                src={DFTLogo}
                loading="lazy"
                alt="profile"
                className="rs-featured__logo"
              />
            </picture>
            <picture>
              <img
                src={ECHELONLogo}
                alt="profile"
                className="rs-featured__logo"
              />
            </picture>
          </div>
        </div>
        <div className="rs-summary__right offset-md-1 col-md-5 order-1 order-md-2">
          {/* <img src={Slider} alt="delivery" /> */}
          <ImageSlider></ImageSlider>
        </div>
      </div>
    </Container>
  );
};
export default Summary;
