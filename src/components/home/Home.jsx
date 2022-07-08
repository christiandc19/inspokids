import React from 'react'
import Banner from '../../assets/home_banner.jpg'
import CardStyle1 from './CardStyle1.jsx';
import Footer from '../footer/Footer.jsx';
import CardImage1 from '../../assets/image1.png'
import CardImage2 from '../../assets/image2.png'
import CardImage3 from '../../assets/image3.png'


import Fade from 'react-reveal/Fade';
import './home.css'


function Home() {
  return (

    // ------------------------------------------------------------------------ CARDS --------------------------------------------------------------------------------------
<>
<hr className='container'/>
<div className='main'>
    <CardStyle1 
    Image = { CardImage1 }
    CardName="50+ Best creative website themes & templates"
    Description="Lorem Ipsum dolor sit amet pretium consecteru adipiscing elit. Lorem consectetur adipescing elit."
    />

<CardStyle1 
    Image = { CardImage2 }
    CardName="The ultimate UX and UI guide to card design themes and templates"
    Description="Lorem Ipsum dolor sit amet pretium consecteru adipiscing elit. Lorem consectetur adipescing elit."
    />

<CardStyle1 
    Image = { CardImage3 }
    CardName="Creative Card Component designs graphic elements"
    Description="Lorem Ipsum dolor sit amet pretium consecteru adipiscing elit. Lorem consectetur adipescing elit."
    />
    </div>

     {/* ------------------------------------------------------------------------ FADE -------------------------------------------------------------------------------------- */}


    <hr className='container'/>

    <div className='home_banner'>
          <div className='quote'>
            <Fade left>
                    <blockquote>
                        <p>
                          <span className='quote_intro'>"Every Child Deserves a Champion</span><br />
                          an adult who will never give up on them, who understands the power of 
                          connection and insists that they become the best they can possibly be." - Rita F. Pierson! 
                        </p><br />
                        <a className='learn-more' href="#">Learn More</a>
                    </blockquote>
            
            </Fade>
            </div>
                    <Fade right>
                    <div className='banner_image'>
                        <img src={ Banner } alt="" />
                    </div>
                    </Fade>
    </div>

    {/* ----------------------------------------------------------------------- FOOTER ----------------------------------------------------------------------------------------------- */}
    
    <Footer/>
    
    
    
    </>    
  )
}

export default Home
