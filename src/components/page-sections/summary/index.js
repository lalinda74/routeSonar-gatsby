import * as React from "react";
import DFTLogo from "../../../images/DFT-logo.png";
import ECHELONLogo from "../../../images/ECHELON-logo.jpeg";
import ImageSlider from "../../objects/image-slider";
import { navigate } from 'gatsby';

const Summary = () => {

  const viewContactPage = () => {
    navigate('/contact');
  };

  return (
    <section className="rs-summary rs-section-w rs-section-w--pad" id="rsSummary">
      <div className="row">
        <div className="rs-summary__left col-xs-12 col-md-6 order-2 order-md-1">
          <div className="mt-4">
            <h1 className="rs-summary__title">
              Smart route planning for efficient and sustainable last mile
              deliveries
            </h1>
            <p className="mt-md-3 mb-md-5 rs-summary__desc">
              RouteSonar helps you improve your on road efficiency by more than
              20% while enabling you to accommodate more orders.
            </p>
            {/* <div className="pb-5 rs-summary__action-wrapper">
              <button className="rs-btn rs-btn--lg rs-btn--primary-variant mt-4 d-flex align-items-center" onClick={() => viewContactPage()}>
                Book a Demo
                <span className="material-icons rs-btn__icon">
                  arrow_right_alt
                </span>
              </button>
            </div> */}
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
        <div className="rs-summary__right offset-lg-1 col-md-6 col-lg-5 order-1 order-md-2">
          <ImageSlider></ImageSlider>
        </div>
      </div>
    </section>
  );
};
export default Summary;
