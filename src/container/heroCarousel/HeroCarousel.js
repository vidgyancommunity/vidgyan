import React from "react";

import Carousel from "react-material-ui-carousel";


import "./HeroCarousel.css"
import { carouselData } from "../../data";

import img3 from "./img3.jpg"
import img2 from "./img2.jpg"




// import lol from './lol.png'
// import lol2 from './lol2.png'

const HeroCarousel = () => {
  return (
    <div className="" >
      <Carousel
        className="carousel"
        autoPlay={true}
        stopAutoPlayOnHover={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        
      >
        

        {
          carouselData.map((data)=>{
            return <img
            width="100%"
            
            src={img3}
            alt=""
            
          />
          })
        }
       
        
        
      
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
