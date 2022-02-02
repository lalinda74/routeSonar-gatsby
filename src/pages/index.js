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
import Sustainability from '../components/page-sections/sustainability';

// favicon
import FavIcon from '../../public/static/favicon.ico';
import FeatureTiles from "../components/page-sections/feature-tiles";

// markup
const IndexPage = () => {
  return (
    <SSRProvider>
      <Helmet>
        <title>RouteSONAR</title>
        <link rel="icon" type="image/x-icon" href={FavIcon}></link>
      </Helmet>
      <main className="rs-main-wrapper">
        <section id="rsSummary">
          <Container>
            <Header></Header>
            <Summary></Summary>
          </Container>
        </section>
        <section id="rsFeatures">
          <Container>
            <Features></Features>
          </Container>
        </section>
        <section id="rsFeatureTiles">
          <Container>
            <FeatureTiles></FeatureTiles>
          </Container>
        </section>
        <section id="rsPricingPlans">
          <Container id="rsPricingPlans">
            <PricingPlans></PricingPlans>
          </Container>
        </section>
        <section id="rsSus">
          <Container>
            <Sustainability></Sustainability>
          </Container>
        </section>
        <section id="rsFaq">
          <Container id="rsFaq">
            <Faq></Faq>
          </Container>
        </section>
        <section id="rsFooter">
          <Container id="rsFooter">
            <Footer></Footer>
          </Container>
        </section>
      </main>
    </SSRProvider>
  )
}

export default IndexPage
