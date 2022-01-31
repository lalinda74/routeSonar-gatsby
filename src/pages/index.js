import * as React from "react";
import Helmet from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../theme/global.scss';

import { Container, SSRProvider } from 'react-bootstrap';

// components
import Header from '../components/header';
import Summary from '../components/page-sections/summary';
import Features from '../components/page-sections/features';
import PricingPlans from "../components/page-sections/pricing-plans";
import Faq from "../components/page-sections/faq";
import Footer from "../components/page-sections/footer";

// favicon
import FavIcon from '../../public/static/favicon.ico';

// markup
const IndexPage = () => {
  return (
    <SSRProvider>
      <Helmet>
        <title>RouteSONAR</title>
        <link rel="icon" type="image/x-icon" href={FavIcon}></link>
      </Helmet>
      <main className="rs-main-wrapper">
        <Container fluid id="rsSummary">
          <Header></Header>
          <Summary></Summary>
        </Container>
        <Container fluid id="rsFeatures">
          <Features></Features>
        </Container>
        <Container fluid id="rsPricingPlans">
          <PricingPlans></PricingPlans>
        </Container>
        <Container fluid id="rsFaq">
          <Faq></Faq>
        </Container>
        <Container fluid id="rsFooter">
          <Footer></Footer>
        </Container>
      </main>
    </SSRProvider>
  )
}

export default IndexPage
