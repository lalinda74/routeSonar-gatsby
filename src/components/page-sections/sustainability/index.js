import * as React from "react";
import { Container } from "react-bootstrap";
import SusImage from "../../../images/sus.jpeg";

const Sustainability = () => {
  return (
    <section className="rs-sus rs-section-w rs-section-w--rounded rs-section-w--grey-bg" id="rsSus">
      <div className="row">
        <div className="rs-sus__left py-5 my-md-5 col-12 col-md-6">
          <h2 className="rs-sus__title py-4">We think about Sustainability, <br/> every step of the way</h2>
          <div className="row">
            <div className="my-md-4 col-md-6">
              <h4>Optimize</h4>
              <p className="mt-2">
                Break the barrier of geo-fencing by optimizing larger instances.
              </p>
            </div>
            <div className="my-4 col-md-6">
              <h4>Improve</h4>
              <p className="mt-2">
                Improve on fleet turnaround time to facilitate more routes.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="my-md-4 col-md-8">
              <h4>Reduce</h4>
              <p className="mt-2">
                Reduce carbon footprint by cutting down the unnecessary miles on
                road as well as using energy efficient fleet whenever it is
                available.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <img src={SusImage} alt="Sustainability" className="rs-sus__img" />
        </div>
      </div>
    </section>
  );
};
export default Sustainability;
