import * as React from "react";
import { Container } from "react-bootstrap";
import DoneIcon from '../../../../public/static/Done.svg';
import LocationImg from '../../../images/location.svg';
import DeliveryImg from '../../../images/delivery.png';

const PricingPlans = () => {
  return (
    <Container fluid="lg" className="rs-pricing-plan rs-section-wrapper">
      <h2 className="text-center pt-5">
        Simple Pricing
        <br /> for Everyone
      </h2>
      <p className="text-center">
        Pricing built for businesses of all sizes. <br /> Always know what
        you’ll pay.
      </p>
      <div className="row py-5 rs-card-wrapper flex-row flex-nowrap">
        <div className="col-12 offset-sm-1 col-sm-5 offset-lg-2 col-lg-4 mb-4">
          <div className="rs-card">
            <div>
              <div className="d-flex justify-content-center">
                <img src={LocationImg} className="rs-card__img text-center" alt ="location pricing plan" />
              </div>
              <h4 className="text-center pt-4">Pay for location usage</h4>
              <ul className="pt-3 rs-card__list">
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /> Starting at &nbsp;<strong>$29.99</strong></li>
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /> 1,000 Locations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-5 col-lg-4 mb-4">
          <div className="rs-card">
            <div>
            <div className="d-flex justify-content-center">
                <img src={DeliveryImg} className="rs-card__img text-center" alt ="delivery pricing plan" />
              </div>
              <h4 className="text-center pt-4">Pay per vehicle per month</h4>
              <ul className="pt-3 rs-card__list">
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /> Starting at &nbsp;<strong>$49.99</strong></li>
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /> With live tracking &nbsp;<strong>$69.99</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PricingPlans;
