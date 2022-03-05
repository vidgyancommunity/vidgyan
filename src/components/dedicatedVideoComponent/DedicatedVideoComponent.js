import React from "react";



import ReactPlayer from "react-player";

import './DedicatedVideoComponent.css'

const DedicatedVideoComponent = ({data}) => {

    
  return (
    <>

    <div className="xyz" >

    
     {
        data.map((data)=>{
            return(<div >
            <ReactPlayer
              url={data.url}
              controls
              height="100%"
              width="300px"
            />
    
            
          </div>)
        })
     }

      </div>
    </>
  );
};

export default DedicatedVideoComponent;
