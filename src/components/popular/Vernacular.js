import React from "react";
import "./Vernacular.css";

import character from './character.png'


const Vernacular = () => {
  return (
    <div className="container">
      <div className="vernacular">
        <div className="textContainer">
          <h3 className="semiheading"> BUILD UP THE COMMUNITY</h3>
          <h2 className="heading">Join The Biggest Community Of Learning</h2>
          <p className="para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        <div className="imgContainer" style={{border: "1px solid red"}}  >

          <img src={character} alt="hhhhhh" />

        </div>
      </div>
    </div>
  );
};

export default Vernacular;
