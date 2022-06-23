import React from 'react'
import Logo from '../../assets/Logo.jpg'
import Carousel from "./Carousel";
import Socials from '../socials/Socials';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import './home.css'

function Home() {
  return (
    <div>
      <div className='container logo-container'>
      <h1>Welcome!</h1>
      <img src={Logo} alt="" />
      </div>
      <Carousel />
      <Socials/>
    </div>
  )
}

export default Home
