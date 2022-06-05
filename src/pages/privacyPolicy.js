import React from "react";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "../theme/global.scss";

import { SSRProvider } from "react-bootstrap";

// favicon
import FavIcon from "../../public/static/favicon.ico";

// markup
const ContactUsPage = () => {
  return (
    <SSRProvider>
      <Helmet>
        <title>RouteSONAR</title>
        <link rel="icon" type="image/x-icon" href={FavIcon}></link>
      </Helmet>
      <main className="container rs-main-wrapper my-5">
        <h2 className="text-center">Welcome to RouteSonar</h2>
        <h4 className="text-center mb-5">
          Thank you for using our products and services!
        </h4>
        <p>
          These Terms of Service (the “Agreement”) is a contract in electronic
          format between you as an end- user and RouteSonar (Pvt) Ltd.,
          governing the use of the RouteSonar route and fleet planning service
          (the “Service”). By accessing and using our Service, you are agreeing
          that you will be bound by and comply with the terms and conditions of
          this Agreement. The terms “RouteSonar (Pvt) Ltd.”, “RouteSonar”, “we”,
          “us” or “our” refers collectively to the licensor RouteSonar (Pvt)
          Ltd. and our website RouteSonar.com (the “Site”). The term “you” or
          “your” refers to you as the user and licensee (“Customer”) of our
          Service under this Agreement. RouteSonar and Customer are sometimes
          referred to herein separately as a “Party” and together as the
          “Parties”.
        </p>
        <p>
          This Agreement is applicable as of the date you access and use our
          Service. We make the Service available through our Site as provided in
          this Agreement. We provide our Service to you under and subject to the
          most recent version of this Agreement. We may update this Agreement at
          any time, without prior notice to you, by posting a new version at
          https://routesonar.com/terms-of-service. The latest Agreement will be
          posted on the Site for your review before using the Service.
        </p>
        <p>
          You are expected to have read this Agreement with due care. If you do
          not agree with all the terms and conditions of this Agreement, you
          must cease using the Service; your continued use of the Service will
          signify your acceptance of this Agreement.
        </p>
        <ol>
          <li>
            <h6>Description of Service</h6>
            <p>
              The Service is designed to provide you with the capability to
              manage your transport or service business. The Service is based on
              our Route and fleet Planning Software (the “services” that is
              hosted by us or on our behalf and accessible by you remotely
              through our Site.
            </p>
            <p>
              As part of the Service, RouteSonar will provide and operate the
              servers, system software, and applications software, including our
              Route and fleet management Software functionality available to you
              in connection with the Service as provided in this Agreement
            </p>
          </li>
          <li>
            <h6>Description of Service</h6>
            <p>
              The Service is designed to provide you with the capability to
              manage your transport or service business. The Service is based on
              our Route and fleet Planning Software (the “services” that is
              hosted by us or on our behalf and accessible by you remotely
              through our Site.
            </p>
          </li>
          <li>
            <h6>Use of the Service</h6>
            <p>
            To use the Service you must register and provide verified credit card information or direct
bank transfer for the appropriate payment for the level of Service you desire. In using the
Service, you at all times agree that you will:
            </p>
            <ol>
              <li>Not use the Service for any unlawful purpose, or in any unlawful way;</li>
              <li>Comply with all codes of conduct or terms of use provisions we may from time to time
require;</li>
                <li>Keep your Service account password secret; and</li>
                <li>Immediately notify us if you learn of a security breach related to the Service, or your use
thereof.</li>
            </ol>
          </li>
          <li>
            <h6>Prohibited Uses of the Service</h6>
            <p>
            In using the Service, you at all times agree that you will not: a) Engage in, facilitate, further,
aid or abet any unlawful conduct; b) Use the Service in a way that harms any third party; c) In

any way use the Service as a destination linked from any unsolicited bulk messages or
unsolicited commercial messages (“spam”); d) Use any automated process or service to
access and/or use the Service (such as a BOT, a spider, periodic caching of information stored
by RouteSonar, or ‘meta-searching’); e) Use any unauthorized means to modify or reroute, or
attempt to modify or reroute, the Service; f) In any way attempt to copy or “reverse
engineer” the Service, or any part thereof; g) In any way damage, disable, overburden, or
impair the Service (or the network(s) connected to the Service), or interfere with anyone’s
use and enjoyment of the Service; and/or, h) Resell or redistribute the Service, or any part of
the Service.
            </p>
          </li>
        </ol>
      </main>
    </SSRProvider>
  );
};

export default ContactUsPage;
