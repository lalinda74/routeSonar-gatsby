import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Feature1 from "../../../images/feature1.svg";
import Feature2 from "../../../images/feature2.svg";

const Features = () => {

  const [activeIndex, setshowIndex] = useState(1);
  const [activeImage, setActiveImage] = useState(Feature1);

  useEffect(() => {
    const timeout = setTimeout(
      () => tick(),
      5000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  function tick() {
    setshowIndex(activeIndex + 1);
    if (activeIndex === 2) {
      setActiveImage(Feature2);
    }
    if (activeIndex > 3) {
      setshowIndex(1);
    }
  }

  return (
    <Container className="rs-features">
      <h3 className="text-center pt-5">
        We help you move your
        <br /> <span className="rs-grey-txt text_1 mt-2">Deliveries</span> <span className="rs-grey-txt text_2">Staff</span>
      </h3>
      <div className="row mt-5">
        <div className="col-12 col-md-3 rs-features__wrapper">
          <div className={`d-flex rs-info-box ${activeIndex === 1 ? 'rs-info-box--active' : null}`}>
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
            <div className="rs-progress-bar"></div>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 2 ? 'rs-info-box--active' : null}`}>
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
            <div className="rs-progress-bar"></div>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 3 ? 'rs-info-box--active' : null}`}>
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
            <div className="rs-progress-bar"></div>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 4 ? 'rs-info-box--active' : null}`}>
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
            <div className="rs-progress-bar"></div>
          </div>
        </div>
        <div className="col-12 col-md-9 d-flex align-items-center">
          <img src={activeImage} className="img-fluid" alt="feature 1" />
        </div>
      </div>
    </Container>
  );
};
export default Features;
