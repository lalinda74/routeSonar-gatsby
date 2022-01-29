import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../theme/global.scss';

import { Container } from 'react-bootstrap';

// components
import Header from '../components/header';
import Summary from '../components/page-sections/summary';
import Features from '../components/page-sections/features';
import PricingPlans from "../components/page-sections/pricing-plans";

// markup
const IndexPage = () => {
  return (
    <main className="rs-main-wrapper">
      <Container fluid id="rsSummary">
        <Header></Header>
        <Summary></Summary>
      </Container>
      <Container fluid id="rsFeatures">
        <Features></Features>
      </Container>
      <Container fluid id="rsFeatures">
        <PricingPlans></PricingPlans>
      </Container>
    </main>
  )
}

export default IndexPage
