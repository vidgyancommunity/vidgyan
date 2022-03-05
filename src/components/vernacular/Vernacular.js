import React from 'react'
import "./Vernacular.css"
import  imgr from "./character.png"

const Vernacular = () => {
  return (
    <div className='container' >
        <div className='vernacular'>
       <div className='textContainer'>
       <h3 className='semiheading'> BUILD UP THE COMMUNITY</h3>
          <h2 className='heading'>Join The Biggest Community Of Learning</h2>
          <p className='para'>
          Many professionals believe higher education is out of reach due to their work and family commitments. But online colleges and universities provide a flexible, convenient way to merge academics—along with your online leaning community—into daily life.{" "}
          </p>
       </div>
       <div className='imgContainer' >
         <img src={imgr} style={{ marginTop:"50px", marginLeft: "100px ",height: "80%"}} />
       </div>
        </div>
        
    </div>
  )
}

export default Vernacular