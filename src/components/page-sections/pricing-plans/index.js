import * as React from "react";
import { Container } from "react-bootstrap";

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
      <div className="row my-5 rs-card-wrapper">
        <div className="col-12 col-sm-4 col-md-4 mb-5">
          <div className="rs-card">
            <div>
              <h5 className="text-center">Basic</h5>
              <p className="text-center">Made for Starters</p>
              <ul className="pt-3">
                <li className="rs-card__list-item">1,000 locations</li>
                <li className="rs-card__list-item">Mail support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-center">LKR 35,000 / month</h4>
              <p className="text-center">LKR 8 per additional request</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4 mb-5">
          <div className="rs-card">
            <div>
              <h5 className="text-center">Pro</h5>
              <p className="text-center">Made for Growth</p>
              <ul className="pt-3">
                <li className="rs-card__list-item">10,000 locations</li>
                <li className="rs-card__list-item">Mail and phone support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-center">LKR 60,000 / month</h4>
              <p className="text-center">LKR 7 per additional request</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4 mb-5">
          <div className="rs-card">
            <div>
              <h5 className="text-center">Enterprise</h5>
              <p className="text-center">Made for Corporate</p>
              <ul className="pt-3">
                <li className="rs-card__list-item">25,000 locations</li>
                <li className="rs-card__list-item">Mail and phone support</li>
                <li className="rs-card__list-item">Advanced analytics dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="text-center">LKR 150,000 / month</h4>
              <p className="text-center">LKR 6 per additional request</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PricingPlans;
