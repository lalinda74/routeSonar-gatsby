import React from "react";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "../theme/global.scss";

import { SSRProvider } from "react-bootstrap";

// components
import Header from "../components/header";
import Summary from "../components/page-sections/summary";
import FeaturesList from "../components/page-sections/features-list";
import PricingPlans from "../components/page-sections/pricing-plans";
import Faq from "../components/page-sections/faq";
import Footer from "../components/page-sections/footer";
import Sustainability from "../components/page-sections/sustainability";

// favicon
import FavIcon from "../../public/static/favicon.ico";

// markup
const IndexPage = () => {
  return (
    <SSRProvider>
      <Helmet>
        <title>RouteSONAR</title>
        <link rel="icon" type="image/x-icon" href={FavIcon}></link>
      </Helmet>
      <main className="rs-main-wrapper">
        <Header></Header>
        <Summary></Summary>
        <FeaturesList></FeaturesList>
        <PricingPlans></PricingPlans>
        <Sustainability></Sustainability>
        <Faq></Faq>
        <Footer></Footer>
      </main>
    </SSRProvider>
  );
};

export default IndexPage;
