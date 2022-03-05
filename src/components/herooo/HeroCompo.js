import React from "react";

import "./HeroCompo.css";
import 'animate.css';

import hero from './Image.png'
import zIndex from "@mui/material/styles/zIndex";



const HeroCompo = () => {
  return (
    <>
   
    
      <section className="herosection flex-wrapper hero" >

      <div className="contentall">  <div style={{   height: "100%", display: "flex", alignItems: "center"}} className="hero-text  ">
          
          <div style={{flex: 1, width:"30%"}}>
            <div className="content">
            <h1 className="pickup-line  ">
            
              Get started your <br/> Learning  & <br/> Enrich your Dream
            </h1>

            <p className=""> Empowering students to create solutions for tomorrow’s challenges </p>
            <div className="searchbar">
              
               
                <div className="ExplorNow  "><a href="#about"><button type="submit" className="animate__bounceIn"> Explor Now </button></a></div>

             
                </div>
          </div>
          </div>

          <div style={{  flex: 1, height: "100%", width:"60%", overflow:"hidden" }} className="heroImg ">
            
            <img className="floating-img" style={{width:"80%", zIndex:"-10"}}  className="img" src={hero} /> 
         
           
          </div>

        </div></div>

      
      
      
         
        
      </section>
   
    </>
  );
};

export default HeroCompo;
