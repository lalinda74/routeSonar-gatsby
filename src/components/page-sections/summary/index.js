import * as React from 'react';
import { Container } from 'react-bootstrap';
import TCLogo from '../../../images/tc-logo.png';

const Summary = () => {

  return (
    <Container className='rs-summary'>
      <div className='rs-summary__left col-xs-12 col-md-7'>
        <h1 className='mt-4'>Smart route planning for efficient and sustainable last mile deliveries</h1>
        <h3 className='mt-4'>RouteSonar helps you improve your on road efficiency by more than 20% while enabling you to accommodate more orders.</h3>
        <div>
          <button className='rs-primary-btn rs-primary-btn--primary-red mt-4'>Book a Demo</button>
        </div>
        <div className='rs-featured mt-5'>
          <h6>Featured on</h6>
          <picture>
            <img src={TCLogo} loading="lazy" alt="profile" className="rs-featured__logo" />
          </picture>
          <picture>
            <img src={TCLogo} loading="lazy" alt="profile" className="rs-featured__logo" />
          </picture>
        </div>
      </div>
      <div className='rs-summary__right col-4'>
      </div>
    </Container>
  )
}
export default Summary