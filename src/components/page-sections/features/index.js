import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Feature1 from "../../../images/feature1.svg";

const Features = () => {

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(
      () => tick(),
      1000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  function tick() {
    console.log('test');
  }

  return (
    <Container className="rs-features">
      <h3 className="text-center pt-5">
        We help you move your
        <br /> <span className="rs-grey-txt text_1 mt-2">Deliveries</span> <span className="rs-grey-txt text_2">Staff</span>
      </h3>
      <div className="row mt-5">
        <div className="col-12 col-md-4 rs-features__wrapper">
          <div className="d-flex rs-info-box">
            {/* <span className="rs-icon-box">
              <span className="material-icons">travel_explore</span>
            </span> */}
            <div>
              <h5 className="rs-info-box__header">Visualize & Plan</h5>
              <p className="rs-info-box__desc">
                Manage all of your orders with highly customizable views before
                optimizing routes.
              </p>
            </div>
          </div>
          <div className="d-flex rs-info-box">
            {/* <span className="rs-icon-box">
              <span className="material-icons-outlined">trending_up</span>
            </span> */}
            <div>
              <h5 className="rs-info-box__header">Optimize</h5>
              <p className="rs-info-box__desc">
                Optimize your routes and distribute among your delivery
                partners.
              </p>
            </div>
          </div>
          <div className="d-flex rs-info-box">
            {/* <span className="rs-icon-box">
              <span className="material-icons-outlined">loop</span>
            </span> */}
            <div>
              <h5 className="rs-info-box__header">Track & Progress</h5>
              <p className="rs-info-box__desc">
                Track all of your data in one application to make better
                decisions to grow your business or product.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 d-flex align-items-center">
          <img src={Feature1} className="img-fluid" alt="feature 1" />
        </div>
      </div>
    </Container>
  );
};
export default Features;
