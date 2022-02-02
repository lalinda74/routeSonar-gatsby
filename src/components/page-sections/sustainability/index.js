import * as React from "react";
import { Container } from "react-bootstrap";
import SusImage from '../../../images/sus.jpg';

const Sustainability = () => {
  return (
    <Container className="rs-sus py-5">
      <div className="row my-5">
        <div className="col-0 col-md-1"></div>
        <div className="rs-sus__left col-6">
          <h2 className="mt-4">Sustainability</h2>
          <p className="mt-5 rs-large-para">
            Reduce carbon footprint by cutting down the unnecessary miles on
            road as well as using energy efficient fleet whenever it is
            available.
          </p>
          <p className="mt-1 rs-large-para">
            Improve on fleet turnaround time to facilitate more routes.
          </p>
          <p className="mt-1 rs-large-para">
            Break the barrier of geo-fencing by optimizing larger instances.
          </p>
        </div>
        <div className="col-4">
          <img src={SusImage} alt = "Sus Image" className="rs-sus__img" />
        </div>
      </div>
    </Container>
  );
};
export default Sustainability;
