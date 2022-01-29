import * as React from "react";
import { Container } from "react-bootstrap";
import TCLogo from "../../../images/tc-logo.png";

const PricingPlans = () => {
  return (
    <Container className="rs-pricing-plan">
      <h2 className="text-center pt-5">
        Simple pricing
        <br /> for everyone
      </h2>
      <p className="text-center">Pricing built for businesses of all sizes. <br /> Always know what you’ll pay.</p>
      <div className="row mt-5">
          <div className="col-12 col-sm-4 mb-5 rs-card">
              <h5 className="text-center">Lite</h5>
              <p className="text-center">Made for starters</p>
              <ul>
                <li>5,000 locations</li>
                <li>Mail support</li>
              </ul>
              <h4 className="text-center">LKR 35,000 / month</h4>
              <p className="text-center">LKR 8 per additional request</p>
          </div>
          <div className="col-12 col-sm-4 mb-5 rs-card">
              <h5 className="text-center">Lite</h5>
              <p className="text-center">Made for starters</p>
              <ul>
                <li>5,000 locations</li>
                <li>Mail support</li>
              </ul>
              <h4 className="text-center">LKR 35,000 / month</h4>
              <p className="text-center">LKR 8 per additional request</p>
          </div>
          <div className="col-12 col-sm-4 mb-5 rs-card">
              <h5 className="text-center">Lite</h5>
              <p className="text-center">Made for starters</p>
              <ul>
                <li>5,000 locations</li>
                <li>Mail support</li>
              </ul>
              <h4 className="text-center">LKR 35,000 / month</h4>
              <p className="text-center">LKR 8 per additional request</p>
          </div>
        </div>
    </Container>
  );
};
export default PricingPlans;
