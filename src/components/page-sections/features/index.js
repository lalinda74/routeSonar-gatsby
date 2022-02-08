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
              <h5 className="rs-info-box__header">Route Optimization</h5>
              <p className="rs-info-box__desc">
                Plan the most efficient route based on the distance and time constraints.
              </p>
            </div>
            <div className="rs-progress-bar"></div>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 2 ? 'rs-info-box--active' : null}`}>
            {/* <span className="rs-icon-box">
              <span className="material-icons-outlined">trending_up</span>
            </span> */}
            <div>
              <h5 className="rs-info-box__header">Fleet Optimization</h5>
              <p className="rs-info-box__desc">
                Use available fleet information to allocate routes based on capacity optimization. Energy efficient fleet planning.
              </p>
            </div>
            <div className="rs-progress-bar"></div>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 3 ? 'rs-info-box--active' : null}`}>
            {/* <span className="rs-icon-box">
              <span className="material-icons-outlined">loop</span>
            </span> */}
            <div>
              <h5 className="rs-info-box__header">Mobile App / Map Integration</h5>
              <p className="rs-info-box__desc">
              Innovative mobile app to plan/ track deliveries in real time. Use existing map on mobile to plot the full route.
              </p>
            </div>
            <div className="rs-progress-bar"></div>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 4 ? 'rs-info-box--active' : null}`}>
            {/* <span className="rs-icon-box">
              <span className="material-icons-outlined">loop</span>
            </span> */}
            <div>
              <h5 className="rs-info-box__header">Data Analytics</h5>
              <p className="rs-info-box__desc">
                Transform operational data into meaningful information for informed decision making. Track Route analytics, Fleet analytics and Green analytics to stay ahead in the competition.
              </p>
            </div>
            <div className="rs-progress-bar"></div>
          </div>
        </div>
        <div className="col-12 col-md-9 d-flex align-items-center">
          <img src={activeImage} className="rs-features__img" alt="feature 1" />
        </div>
      </div>
    </Container>
  );
};
export default Features;
