import React from 'react'
import './footer.css';

function Footer() {
  return (
    
    <>

    <div className='footer-container'>
    <div className='footer-header'>
      
            <div>
                <h4>Signup for latest news and insights from Inspokids</h4>
            </div>

            <div>
                <h4>Our Location</h4>
                <p>401 Broadway, 24th Floor, Orchard Cloud View, London</p>
            </div>

            <div className='form'>
                <input type="text" placeholder='Enter your email address' /><br/>
                <button>Subscribe</button>
            </div>
    </div>


        <section className='footer-body'>
            <div>Div</div>
            <div>Div</div>
            <div>Div</div>
            <div>Div</div>
            <div>Div</div>
        </section>
        </div>
    </>
  )
}

export default Footer
