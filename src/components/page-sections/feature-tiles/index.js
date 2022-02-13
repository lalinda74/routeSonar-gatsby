import * as React from "react";
import { Container } from "react-bootstrap";

const FeatureTiles = () => {
  return (
    <Container fluid="xs, sm, md" className="rs-features-tiles mb-5">
      <div className="row justify-content-center">
        <h2 className="pt-5 col-md-8">
          Everything you need <br/>
          to do better work
        </h2>
      </div>
      <div className="row mt-5 pb-5 justify-content-center">
        <div className="col-12 col-md-4">
          <div className="rs-feature-card rs-feature-card--first">
            <h3 className="rs-feature-card__title">Route Optimization</h3>
            <p className="rs-feature-card__desc">Plan the most efficient route based on the distance and time constraints</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="rs-feature-card rs-feature-card--second">
            <h3 className="rs-feature-card__title">Fleet Optimization</h3>
            <p className="rs-feature-card__desc">Use available fleet information to allocate routes based on capacity optimization</p>
            <p className="rs-feature-card__desc">Energy efficient fleet planning</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5">
          <div className="rs-feature-card rs-feature-card--third">
            <h3 className="rs-feature-card__title">Mobile App / Map integration</h3>
            <p className="rs-feature-card__desc">Innovative mobile app to plan/ track deliveries in real time. Use existing map on mobile to plot the full route.</p>
            <p className="rs-feature-card__desc"></p>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="rs-feature-card">
            <h3 className="rs-feature-card__title">Data analytics</h3>
            <p className="rs-feature-card__desc">Transform operational data into meaningful information for informed decision making</p>
            <p className="rs-feature-card__desc">Track Route analytics, Fleet analytics and Green analytics to stay ahead in the competition</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default FeatureTiles;
