import React from 'react'
import Fade from 'react-reveal/Fade';
import './services.css';


class Services extends React.Component {
  render() {
    return (

      <div>
          <h1>React Reveal</h1>

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

    );
  }
}


export default Services
