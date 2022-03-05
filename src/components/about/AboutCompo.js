import React from "react";
import "./AboutCompo.css";

import verna from './verna.png'

const AboutCompo = ({title, description}) => {
  return (
    <>
      <div className="container">
        <div className="about">
          <div className="text-center text">
            <h3 className="semiheading"> BUILD UP THE COMMUNITY</h3>
            <h2 className="heading">Join The Biggest Community Of Learning</h2>
            <p className="aboutPara para">
             Our communities provide a space and a structure for people to align around a shared goal.
            </p>
            </div>
          </div>
        </div>
      

      <div style={{width: "100%",}} className="aboutimg">
        <img style={{width: "100%"}} src={verna} alt="" />
      </div>
    </>
  );
};

export default AboutCompo;
