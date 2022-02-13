import React, { useEffect } from "react";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "../theme/global.scss";

import { Container, SSRProvider } from "react-bootstrap";

// components
import Header from "../components/header";
import Summary from "../components/page-sections/summary";
import Features from "../components/page-sections/features";
import PricingPlans from "../components/page-sections/pricing-plans";
import Faq from "../components/page-sections/faq";
import Footer from "../components/page-sections/footer";
import Sustainability from "../components/page-sections/sustainability";

// favicon
import FavIcon from "../../public/static/favicon.ico";

// markup
const IndexPage = () => {

    useEffect(() => {
      let timeout;
      let scroll = 0;
      window.onscroll = () => {
        if (timeout) {
          clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
          if (scroll >= window.scrollY && window.scrollY > 10) {
            document.getElementById('rsHeader').classList.add('sticky')
          } else {
            document.getElementById('rsHeader').classList.remove('sticky')
          }

          scroll = window.scrollY
        }, 10)
      }
    }, []);

  return (
    <SSRProvider>
      <Helmet>
        <title>RouteSONAR</title>
        <link rel="icon" type="image/x-icon" href={FavIcon}></link>
      </Helmet>
      <main className="rs-main-wrapper">
        <header id="rsHeader">
          <Container fluid="lg">
            <Header></Header>
          </Container>
        </header>
        <section id="rsSummary">
          <Summary></Summary>
        </section>
        <section id="rsFeatures">
          <Features></Features>
        </section>
        <section id="rsPricingPlans">
          <PricingPlans></PricingPlans>
        </section>
        <section id="rsSus">
          <Sustainability></Sustainability>
        </section>
        <section id="rsFaq">
          <Faq></Faq>
        </section>
        <section id="rsFooter">
          <Footer></Footer>
        </section>
      </main>
    </SSRProvider>
  );
};

export default IndexPage;
