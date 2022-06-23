import React from "react";
import { Carousel } from "react-responsive-carousel";
import  Image1  from '../../assets/image1.png'
import  Image2  from '../../assets/image2.png'
import  Image3  from '../../assets/image3.png'
import  Image4  from '../../assets/image4.png'
import  Image5  from '../../assets/image5.png'
import  Image6  from '../../assets/image6.png'


import './home.css'


export default () => (
  <Carousel autoPlay stopOnHover  className="carousel-img container">
    <div>
    <img src={ Image1 } alt="" />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
    <img src={Image2} alt="" />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
    <img src={Image3} alt="" />
      {/* <p className="legend">Legend 3</p> */}
    </div>
    <div>
    <img src={Image4} alt="" />
      {/* <p className="legend">Legend 4</p> */}
    </div>
    <div>
    <img src={Image5} alt="" />
      {/* <p className="legend">Legend 5</p> */}
    </div>
    <div>
    <img src={Image6} alt="" />
      {/* <p className="legend">Legend 6</p> */}
    </div>
  </Carousel>
);