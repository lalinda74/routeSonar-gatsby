import * as React from 'react';
import { rsSummary } from './summary.module.scss';

const Summary = () => {

  return (
    <section className='rs-wrapper rs-summary'>
      <div className='rs-summary__left'>
        <h1>Plan the best travel route <br/>for your last mile deliveries</h1>
        <h3>RouteSonar helps you improve your on road efficiency by more than 20% while enabling you to accommodate more orders.</h3>
        <button className='rs-primary-btn rs-primary-btn--primary-red'>Book a Demo</button>
      </div>
      <div className='rs-summary__right'>
      </div>
    </section>
  )
}
export default Summary