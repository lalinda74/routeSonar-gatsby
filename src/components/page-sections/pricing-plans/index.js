import * as React from "react";
import { Container } from "react-bootstrap";
import DoneIcon from '../../../../public/static/Done.svg';

const PricingPlans = () => {
  return (
    <Container fluid="lg" className="rs-pricing-plan rs-section-w rs-section-w--pad" id="rsPricingPlans">
      <h2 className="text-center">
        Simple Pricing
        <br /> for Everyone
      </h2>
      <p className="text-center">
        Pricing built for businesses of all sizes. <br /> Always know what
        you’ll pay.
      </p>
      <div className="row pt-5 rs-card-wrapper flex-row flex-nowrap">
        <div className="col-12 offset-sm-1 col-sm-5 offset-lg-2 col-lg-4 mb-4">
          {/* <div className="rs-card">
            <div>
              <div className="d-flex justify-content-center rs-card__img-wrapper">
                <img src={LocationImg} className="rs-card__img text-center" alt ="location pricing plan" />
              </div>
              <h4 className="text-center pt-4">Pay for location usage</h4>
              <ul className="pt-3 rs-card__list">
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>Starting at &nbsp;<strong>$29.99</strong></div></li>
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>1,000 Locations</div></li>
              </ul>
            </div>
          </div> */}
          <div className="rs-pricing-card">
            <img src="https://cdn-public-assets.join.com/2021/03/4c2a223a-o-build-icon.svg" alt="pricing plan 1" />
            <h4 className="pt-4">Pay for location usage</h4>
            <p>Get precise guidence to attract more customers</p>
            <ul className="pt-2 rs-card__list">
              <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>Starting at &nbsp;<strong>$29.99</strong></div></li>
              <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>1,000 Locations</div></li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-5 col-lg-4 mb-4">
        <div className="rs-pricing-card">
            <img src="https://cdn-public-assets.join.com/2021/03/4c2a223a-o-build-icon.svg" alt="pricing plan 1" />
            <h4 className="pt-4">Pay per vehicle per month</h4>
            <p>Get precise guidence to attract more customers</p>
            <ul className="pt-2 rs-card__list">
              <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>Starting at &nbsp;<strong>$49.99</strong></div></li>
              <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>With live tracking &nbsp;<strong>$69.99</strong></div></li>
            </ul>
          </div>
          {/* <div className="rs-card">
            <div>
            <div className="d-flex justify-content-center rs-card__img-wrapper">
                <img src={DeliveryImg} className="rs-card__img text-center" alt ="delivery pricing plan" />
              </div>
              <h4 className="text-center pt-4">Pay per vehicle per month</h4>
              <ul className="pt-3 rs-card__list">
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>Starting at &nbsp;<strong>$49.99</strong></div></li>
                <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>With live tracking &nbsp;<strong>$69.99</strong></div></li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </Container>
  );
};
export default PricingPlans;
