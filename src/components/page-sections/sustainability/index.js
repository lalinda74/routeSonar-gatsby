import * as React from "react";
import { Container } from "react-bootstrap";
import SusImage from "../../../images/sus.jpg";
import DoneIcon from "../../../../public/static/Done.svg";

const Sustainability = () => {
  return (
    <Container className="rs-sus py-5">
      <div className="row my-5">
        <div className="col-0 col-md-1"></div>
        <div className="rs-sus__left col-12 col-md-6">
          <h1 className="py-4">Sustainability</h1>
          <div className="d-flex align-items-start my-4">
            <img src={DoneIcon} alt="Done Icon" className="rs-sus__icon" />
            <p className="mt-5 rs-large-para">
              Reduce carbon footprint by cutting down the unnecessary miles on
              road as well as using energy efficient fleet whenever it is
              available.
            </p>
          </div>
          <div className="d-flex align-items-start my-4">
            <img src={DoneIcon} alt="Done Icon" className="rs-sus__icon" />
            <p className="mt-5 rs-large-para">
              Improve on fleet turnaround time to facilitate more routes.
            </p>
          </div>
          <div className="d-flex align-items-start my-4">
            <img src={DoneIcon} alt="Done Icon" className="rs-sus__icon" />
            <p className="mt-5 rs-large-para">
              Break the barrier of geo-fencing by optimizing larger instances.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center">
          <img src={SusImage} alt="Sus Image" className="rs-sus__img" />
        </div>
      </div>
    </Container>
  );
};
export default Sustainability;
