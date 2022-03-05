import React from "react";

import "./ContactUsCompo.css";

const ContactUsCompo = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          action="/thankyou"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            width: "60vw",
            boxShadow: "3px 6px 16px 0px rgba(0,0,0,0.65)",
            backgroundColor: "pink",
            marginBottom: "50px"
     
          }}
        >
          <h1 style={{ marginBottom: "10px", width: "50%", textAlign: "center" }}> Contact Us </h1>

          <div style={{ marginBottom: "30px", width: "50%" }}>
            <label> Name </label>

            <input className="inputa" type="text" placeholder="Enter your name" />
          </div>

          <div style={{ marginBottom: "30px", width: "50%" }}>
            <label> Email </label>
            <input className="inputa" type="text" placeholder="Enter your email" />
          </div>

          <div style={{ marginBottom: "30px", width: "50%" }}>
            <label> Phone Number </label>
            <input className="inputa" type="tel" placeholder="Enter your phone Number" />
          </div>

          <div style={{ marginBottom: "30px", width: "50%" }}>
            <label> Message</label>
            <textarea rows="4" className="textarea"  placeholder="Write messages... " />
          </div>

          <button
            style={{
              color: "var(--pure)",
              width: "50%",
              height: "45px",
              background: "var(--primary-color)",
              border: "none",
            }}
          >
          
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUsCompo;
