import React from "react";
import { Container } from "react-bootstrap";
import Feature2 from "../../../images/feature2.svg";
import FeatureCircle1 from "../../../images/feature-tile1.svg";

const FeaturesList = () => {

  return (
    <section className="rs-features rs-section-w rs-section-w--pad rs-section-w--rounded rs-section-w--grey-bg" id="rsFeatures">
      <h2 className="text-center">
        We help you move your<br /> 
        <span className="rs-grey-txt text_1 mt-2">Deliveries</span> <span className="rs-grey-txt text_2">Staff</span>
      </h2>
      <div className="mt-5 rs-features-pw">
        <div className="rs-features__wrapper rs-features-pw__left">
          <div className='d-flex rs-info-box'>
            <div className="rs-circle rs-circle--space-r">
              <img src={FeatureCircle1} />
            </div>
            <div>
              <h4 className="rs-info-box__header">Route Optimization</h4>
              <p className="rs-info-box__desc">
                Plan the most efficient route based on the distance and time constraints.
              </p>
            </div>
          </div>
          <div className='d-flex rs-info-box'>
            <div className="rs-circle rs-circle--space-r">
              <img src={FeatureCircle1} />
            </div>
            <div>
              <h4 className="rs-info-box__header">Fleet Optimization</h4>
              <p className="rs-info-box__desc">
                Use available fleet information to allocate routes based on capacity optimization. Energy efficient fleet planning.
              </p>
            </div>
          </div>
          <div className='d-flex rs-info-box'>
            <div className="rs-circle rs-circle--space-r">
              <img src={FeatureCircle1} />
            </div>
            <div>
              <h4 className="rs-info-box__header">Mobile App / Map Integration</h4>
              <p className="rs-info-box__desc">
              Innovative mobile app to plan/ track deliveries in real time. Use existing map on mobile to plot the full route.
              </p>
            </div>
          </div>
          <div className='d-flex rs-info-box'>
            <div className="rs-circle rs-circle--space-r">
              <img src={FeatureCircle1} />
            </div>
            <div>
              <h4 className="rs-info-box__header">Data Analytics</h4>
              <p className="rs-info-box__desc">
                Transform operational data into meaningful information for informed decision making. Track Route analytics, Fleet analytics and Green analytics to stay ahead in the competition.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center rs-features-pw__right">
          <img src={Feature2} className="rs-features__img" alt="feature 1" />
        </div>
      </div>
    </section>
  );
};
export default FeaturesList;
