import React from 'react'
import Footer from '../footer/Footer.jsx';
import Fade from 'react-reveal/Fade';
import './services.css';


class Services extends React.Component {
  render() {
    return (
<>
      <div className='container services-header'>
      <h5>Our Services</h5>
      <h1>What We Offer</h1>
      <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
      </div>
        <br />
      <div>
          <div className='container services-container'>

            <Fade left>
                <div className='service1'>
                  <h1>Occupational Theraphy</h1>
                </div>
            </Fade>

            <Fade right>
                <div className='service-img1'>
                  <h1>Image1</h1>
                </div>
            </Fade>

          </div>
      </div>
      <Footer/>
</>
    );
  }
}


export default Services
