import React from "react";

import ReactPlayer from "react-player";

import "./VideoCompo.css";

const VideoCompo = ({title, linkedu}) => {
  return (
    <>
      <div
        style={{
          height: "350px",
          width: "350px",
          position: "relative",
          boxShadow: "10px 10px 19px -7px rgba(0,0,0,0.75)",
        }}
      >
        <ReactPlayer
          height="70%"
          width="100%"
          url={linkedu}
          controls
        />

        <h2
          style={{
            color: "blue",
            marginTop: "8px",
            fontWeight: 500,
            position: "absolute",
            left: "20px",
            fontSize: "16px"
          }}
        >
         
          Title: {title}
        </h2>
        <p
          style={{
            fontWeight: 500,
            position: "absolute",
            top: "calc(350px * 70/100 + 60px)",
            left: "20px",
            opacity: 0.6,
            fontSize: "16px",
          }}
        >
          oi pu09iuipou p0ouipo mpoiyu9ion oiyu ertye4y
        </p>
      </div>
    </>
  );
};

export default VideoCompo;
