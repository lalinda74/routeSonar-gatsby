import * as React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import ExpandedRow from '../../expanded-row';

const list = [
  {
    id: 1,
    title: 'What is RouteSONAR?',
    desc: 'RouteSONAR is an innovative route optimization platform developed to find the most efficient travel route out of all possible outcomes mapped across the multiple last mile delivery locations.'
  },
  {
    id: 2,
    title: 'Why use RouteSONAR?',
    desc: 'By providing its users with the shortest and optimal travel route, RouteSONAR can significantly reduce fuel cost and wastage of time. This allows RouteSONAR users to handle more delivery locations and maximize the usage of vehicle fleet for delivery. It also helps to bring down delivery cost drastically which creates a competitive advantage over other businesses.'
  },
  {
    id: 3,
    title: 'Who are the users of RouteSONAR?',
    desc: 'RouteSONAR is ideal for Courier companies, E-commerce companies, Distributors & Agents, Maintenance teams, Dynamic staff transport services and personal users who wants to get multiple tasks [GC1] done in one go.'
  },
  {
    id: 4,
    title: 'How much of an efficiency improvement can I expect out of this?',
    desc: 'We estimate a cost improvement of 30% overall where the on-road efficiency can range from 20% to 30% based on the sheer volume of the orders handled.'
  }
]

const Faq = () => {
  return (
    <Container className="rs-features pb-5">
      <h2 className="text-center pt-5">Frequently Asked Questions</h2>
      <p className="text-center">
        Everything you need to know about us
      </p>
      <Tabs
        defaultActiveKey="general"
        transition={false}
        id="noanim-tab-example"
        className="my-5 rs-tabs"
      >
        <Tab eventKey="general" title="General" className="rs-tabs__tab">
        {
                list.length > 0 && 
                list.map(item =>(
                  <div className="row" key = {item.id}>
                    <div className="col-12 offset-md-3 col-md-6 py-4">
                      <ExpandedRow data = {item}></ExpandedRow>
                    </div>
                  </div>
                ))
        }
        </Tab>
        <Tab eventKey="pricing" title="Pricing" className="rs-tabs__tab">
          <div className="row">
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h3 className="rs-info-box__header">
                  What are the available pricing plans?
                </h3>
                <p className="rs-info-box__desc">
                  We offer two pricing plans – Pay as you Go & location bundles.{" "}
                </p>
                <p className="rs-info-box__desc">
                  Pay as you Go – You will be charged for the usage at the end
                  of the month based on the number of locations you process.
                </p>
                <p className="rs-info-box__desc">
                  Location bundle – You may pre-purchase a location bundle based
                  on your historical usage and pay for the additional usage at
                  the end of each month.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h3 className="rs-info-box__header">
                What is the advantage if I go for a bundle package?
                </h3>
                <p className="rs-info-box__desc">
                Compared to the Pay as you Go plan, Bundle packages are discounted by more than 20% with additional usage charged at lower rates.
                </p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="join" title="Join with us" className="rs-tabs__tab">
          <div className="row">
            <div className="col-12 col-md-6 d-flex mb-5">
              <span className="rs-icon-box">
                <span className="material-icons">menu</span>
              </span>
              <div>
                <h3 className="rs-info-box__header">This is fantastic! How do I sign up?</h3>
                <p className="rs-info-box__desc">
                You can email us at hello@routesonar.com or call us at 0768 426 882
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
