import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Feature1 from "../../../images/feature1.svg";
import Feature2 from "../../../images/feature2.svg";
import ProgressBar from "../../objects/progress-bar";

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

  function changeOption(index) {
    setshowIndex(index);
  }

  return (
    <Container fluid="xs, sm, md" className="rs-features rs-section-wrapper">
      <h2 className="text-center">
        We help you move your
        <br /> <span className="rs-grey-txt text_1 mt-2">Deliveries</span> <span className="rs-grey-txt text_2">Staff</span>
      </h2>
      <div className="mt-3 rs-features-pw">
        <div className="rs-features__wrapper rs-features-pw__left">
          <div className={`d-flex rs-info-box ${activeIndex === 1 ? 'rs-info-box--active' : null}`} role="button" onClick={() => changeOption(1)}>
            <div>
              <h4 className="rs-info-box__header">Route Optimization</h4>
              <p className="rs-info-box__desc">
                Plan the most efficient route based on the distance and time constraints.
              </p>
            </div>
            <ProgressBar></ProgressBar>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 2 ? 'rs-info-box--active' : null}`} role="button" onClick={() => changeOption(2)}>
            <div>
              <h4 className="rs-info-box__header">Fleet Optimization</h4>
              <p className="rs-info-box__desc">
                Use available fleet information to allocate routes based on capacity optimization. Energy efficient fleet planning.
              </p>
            </div>
            <ProgressBar></ProgressBar>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 3 ? 'rs-info-box--active' : null}`} role="button" onClick={() => changeOption(3)}>
            <div>
              <h4 className="rs-info-box__header">Mobile App / Map Integration</h4>
              <p className="rs-info-box__desc">
              Innovative mobile app to plan/ track deliveries in real time. Use existing map on mobile to plot the full route.
              </p>
            </div>
            <ProgressBar></ProgressBar>
          </div>
          <div className={`d-flex rs-info-box ${activeIndex === 4 ? 'rs-info-box--active' : null}`} role="button" onClick={() => changeOption(4)}>
            <div>
              <h4 className="rs-info-box__header">Data Analytics</h4>
              <p className="rs-info-box__desc">
                Transform operational data into meaningful information for informed decision making. Track Route analytics, Fleet analytics and Green analytics to stay ahead in the competition.
              </p>
            </div>
            <ProgressBar></ProgressBar>
          </div>
        </div>
        <div className="d-flex align-items-center rs-features-pw__right">
          <img src={activeImage} className="rs-features__img" alt="feature 1" />
        </div>
      </div>
    </Container>
  );
};
export default Features;
