import * as React from "react";
import { Container } from "react-bootstrap";
import DoneIcon from '../../../../public/static/Done.svg';
import LocationImg from '../../../images/location.svg';
import DeliveryImg from '../../../images/delivery.png';

const PricingPlans = () => {
  return (
    <Container className="rs-pricing-plan">
      <h2 className="text-center pt-5">
        Simple pricing
        <br /> for everyone
      </h2>
      <p className="text-center">
        Pricing built for businesses of all sizes. <br /> Always know what
        you’ll pay.
      </p>
      <div className="row py-5 rs-card-wrapper">
        <div className="col-12 col-sm-4 offset-md-2 col-md-4 mb-5">
          <div className="rs-card">
            <div>
              <div className="d-flex justify-content-center">
                <img src={LocationImg} className="rs-card__img text-center" />
              </div>
              <h3 className="text-center pt-4">Pay for location usage</h3>
              {/* <p className="text-center">Made for Starters</p> */}
              <ul className="pt-3 rs-card__list">
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /> Starting at &nbsp;<strong>$29.99</strong></li>
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /> 1,000 Locations</li>
              </ul>
            </div>
            {/* <div>
              <h4 className="text-center">LKR 35,000 / month</h4>
              <p className="text-center">LKR 8 per additional request</p>
            </div> */}
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4 mb-5">
          <div className="rs-card">
            {/* <span className="rs-card__tag">Popular</span> */}
            <div>
            <div className="d-flex justify-content-center">
                <img src={DeliveryImg} className="rs-card__img text-center" />
              </div>
              <h3 className="text-center pt-4">Pay per vehicle per month</h3>
              {/* <p className="text-center">Made for Growth</p> */}
              <ul className="pt-3">
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /> Starting at &nbsp;<strong>$49.99</strong></li>
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /> With live tracking &nbsp;<strong>$69.99</strong></li>
              </ul>
            </div>
            {/* <div>
              <h4 className="text-center">LKR 60,000 / month</h4>
              <p className="text-center">LKR 7 per additional request</p>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PricingPlans;
