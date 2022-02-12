import * as React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import ExpandedRow from '../../expanded-row';

const GENERAL_LIST = [
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
];

const PRICING_LIST = [
  {
    id: 1,
    title: 'What are the available pricing plans?',
    desc: 'We offer two pricing plans – Pay as you Go & location bundles.{" "} Pay as you Go – You will be charged for the usage at the end of the month based on the number of locations you process. Location bundle – You may pre-purchase a location bundle based on your historical usage and pay for the additional usage at the end of each month.'
  },
  {
    id: 2,
    title: 'What is the advantage if I go for a bundle package?',
    desc: 'Compared to the Pay as you Go plan, Bundle packages are discounted by more than 20% with additional usage charged at lower rates.'
  }
];

const JOIN_US_LIST = [
  {
    id: 1,
    title: 'This is fantastic! How do I sign up?',
    desc: 'You can email us at hello@routesonar.com or call us at 0768 426 882'
  }
];

const Faq = () => {
  return (
    <Container className="rs-faq rs-section-wrapper py-5">
      <h2 className="text-center">Frequently Asked Questions</h2>
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
                GENERAL_LIST.length > 0 && 
                GENERAL_LIST.map(item =>(
                  <div className="row" key = {item.id}>
                    <div className="col-12 offset-md-2 col-md-8">
                      <ExpandedRow data = {item}></ExpandedRow>
                    </div>
                  </div>
                ))
        }
        </Tab>
        <Tab eventKey="pricing" title="Pricing" className="rs-tabs__tab">
          {
                  PRICING_LIST.length > 0 && 
                  PRICING_LIST.map(item =>(
                    <div className="row" key = {item.id}>
                      <div className="col-12 offset-md-2 col-md-8">
                        <ExpandedRow data = {item}></ExpandedRow>
                      </div>
                    </div>
                  ))
          }
        </Tab>
        <Tab eventKey="join" title="Join with us" className="rs-tabs__tab">
        {
                  JOIN_US_LIST.length > 0 && 
                  JOIN_US_LIST.map(item =>(
                    <div className="row" key = {item.id}>
                      <div className="col-12 offset-md-2 col-md-8">
                        <ExpandedRow data = {item}></ExpandedRow>
                      </div>
                    </div>
                  ))
          }
        </Tab>
      </Tabs>
    </Container>
  );
};
export default Faq;
