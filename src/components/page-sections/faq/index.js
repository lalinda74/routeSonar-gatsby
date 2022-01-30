import * as React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

const Faq = () => {
  return (
    <Container className="rs-features pb-5">
      <h2 className="text-center pt-5">Frequently Asked Questions</h2>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="my-5 rs-tabs"
      >
        <Tab eventKey="home" title="Home" className="rs-tabs__tab">
          <div className="row">
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h5>What is RouteSONAR?</h5>
                <p>
                  RouteSONAR is an innovative route optimization platform
                  developed to find the most efficient travel route out of all
                  possible outcomes mapped across the multiple last mile
                  delivery locations.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h5>Who are the users of RouteSONAR?</h5>
                <p>
                  RouteSONAR is ideal for Courier companies, E-commerce
                  companies, Distributors & Agents, Maintenance teams, Dynamic
                  staff transport services and personal users who wants to get
                  multiple tasks [GC1] done in one go.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h5>Why use RouteSONAR?</h5>
                <p>
                  By providing its users with the shortest and optimal travel
                  route, RouteSONAR can significantly reduce fuel cost and
                  wastage of time. This allows RouteSONAR users to handle more
                  delivery locations and maximize the usage of vehicle fleet for
                  delivery.
                  <br />
                  <br />
                  It also helps to bring down delivery cost drastically which
                  creates a competitive advantage over other businesses.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h5>
                  How much of an efficiency improvement can I expect out of
                  this?
                </h5>
                <p>
                  We estimate a cost improvement of 30% overall where the
                  on-road efficiency can range from 20% to 30% based on the
                  sheer volume of the orders handled.
                </p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profile" className="rs-tabs__tab">
          <div className="row">
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h5>What is RouteSONAR?</h5>
                <p>
                  RouteSONAR is an innovative route optimization platform
                  developed to find the most efficient travel route out of all
                  possible outcomes mapped across the multiple last mile
                  delivery locations.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h5>Who are the users of RouteSONAR?</h5>
                <p>
                  RouteSONAR is ideal for Courier companies, E-commerce
                  companies, Distributors & Agents, Maintenance teams, Dynamic
                  staff transport services and personal users who wants to get
                  multiple tasks [GC1] done in one go.
                </p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Contact" className="rs-tabs__tab">
          <div className="row">
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h5>What is RouteSONAR?</h5>
                <p>
                  RouteSONAR is an innovative route optimization platform
                  developed to find the most efficient travel route out of all
                  possible outcomes mapped across the multiple last mile
                  delivery locations.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h5>Who are the users of RouteSONAR?</h5>
                <p>
                  RouteSONAR is ideal for Courier companies, E-commerce
                  companies, Distributors & Agents, Maintenance teams, Dynamic
                  staff transport services and personal users who wants to get
                  multiple tasks [GC1] done in one go.
                </p>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};
export default Faq;
