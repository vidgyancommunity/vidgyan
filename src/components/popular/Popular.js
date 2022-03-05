import React from "react";
import "./Popular.css";
import { Link } from "react-router-dom";

import CourseCardCompo from "../courseCardCompo/CourseCardCompo";

import Cards from "../../cardData";

const popular = () => {
  return (
    <div className="container">
      <div className="popC" id="about">
        {Cards.map((data) => {
          const hfghf = "/course" + data.to;

          return (
            <Link style={{ textDecoration: "none" }} to={hfghf} key={data.id}>
           
              <CourseCardCompo
                key={data.id}
                desc={data.desc}
                CourseTitle={data.CourseTitle}
                educator={data.educator}
                ImgUrl={data.ImgUrl}

              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default popular;
