import React from 'react'
import Carousel from '../../components/home/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-awesome-reveal";
import './gallery.css'





function Gallery() {
  return (
    <Fade>
    <div>
      <Carousel />
    </div>
    </Fade>

  )
}

export default Gallery
