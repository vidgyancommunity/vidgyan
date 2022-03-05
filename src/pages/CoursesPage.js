import React from "react";

import { Link } from "react-router-dom";

import CourseCardCompo from "../components/courseCardCompo/CourseCardCompo";



const CoursesPage = () => {

  

  return (
    <>
      <div className="container">

      

       
          


        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"10vh" }}>

          <Link style={{textDecoration: "none"}} to="/course/video"> <CourseCardCompo /></Link>
          <Link style={{textDecoration: "none"}} to="/course/video"> <CourseCardCompo /></Link><Link style={{textDecoration: "none"}} to="/course/video"> <CourseCardCompo /></Link><Link style={{textDecoration: "none"}} to="/course/video"> <CourseCardCompo /></Link>
          
          
        </div>




      </div>
    </>
  );
};

export default CoursesPage;
