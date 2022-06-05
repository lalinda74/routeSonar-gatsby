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
      <main className="row">
        <div className="col-6">
          <h4 className="mb-2">Start improving your business.</h4>
          <p className="mb-5">
            We're excited to get you started with hiring your next candidates.
          </p>
          <form>
            <div className="row mb-4">
              <div className="col-6 rs-inp">
                <label>First name</label>
                <input type="text" name="firstName" required />
              </div>
              <div className="col-6 rs-inp">
                <label>Surname</label>
                <input type="text" name="surname" required />
              </div>
              <div className="col-12 rs-inp mt-4">
                <label>E-mail</label>
                <input type="email" name="email" required />
              </div>
              <div className="col-12 d-flex mt-5">
                <input type="checkbox" />
                <p>
                  I agree to the JOIN Terms & Conditions and the Data Processing
                  Agreement and have read the Data Privacy Policy
                </p>
              </div>
            </div>
            {/* <button>Book a Demo</button> */}
          </form>
        </div>
        <div className="col-6"></div>
      </main>
    </SSRProvider>
  );
};

export default ContactUsPage;
