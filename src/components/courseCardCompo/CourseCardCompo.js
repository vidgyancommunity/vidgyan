import React from 'react';



import './CourseCardCompo.css';

const CourseCardCompo = ({CourseTitle, educator, desc, ImgUrl}) => {
  return (
    <div className='courseCard'>
       <div className='top'> <img src={ImgUrl} ></img> </div>
       
       <div className='bottom'>
       <h4>{CourseTitle} </h4>
       <p className='teacherName'>{educator}</p>
       <p> {desc}</p>
        </div>


    </div>
  )
}

export default CourseCardCompo