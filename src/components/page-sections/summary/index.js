import * as React from 'react';
import { rsSummary } from './summary.module.scss';
import TCLogo from '../../../images/tc-logo.png';

const Summary = () => {

  return (
    <section className='rs-wrapper rs-summary'>
      <div className='rs-summary__left col-xs-12 col-md-6'>
        <h1 className='mt-4'>Plan the best travel route for your <br/> last mile deliveries</h1>
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
    </section>
  )
}
export default Summary