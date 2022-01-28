import * as React from 'react';
import Feature1 from '../../../images/feature1.svg';

const Features = () => {

  return (
    <section className='rs-wrapper rs-features'>
        <h2 className='text-center pt-5'>We help you move your<br/> Deliveries</h2>
        <div className='row'>
          <div className='rs-summary__left col-xs-4 col-md-4'>
              <div className='d-flex mb-4'>
                  <span className='rs-icon-box'>
                    <span className="material-icons">menu</span>
                  </span>
                  <div>
                    <h5>Visualize & Plan</h5>
                    <p>Manage all of your orders with highly customizable views before optimizing routes.</p>
                  </div>
              </div>
              <div className='d-flex mb-4'>
                  <span className='rs-icon-box'>
                    <span className="material-icons">menu</span>
                  </span>
                  <div>
                    <h5>Optimize</h5>
                    <p>Optimize your routes and distribute among your delivery partners.</p>
                  </div>
              </div>
              <div className='d-flex mb-4'>
                  <span className='rs-icon-box'>
                    <span className="material-icons">menu</span>
                  </span>
                  <div>
                    <h5>Track & Progress</h5>
                    <p>Track all of your data in one application to make better decisions to grow your business or product.</p>
                  </div>
              </div>
          </div>
          <div className='rs-summary__right col-md-8'>
            <img src={Feature1} />
          </div>
        </div>
    </section>
  )
}
export default Features;