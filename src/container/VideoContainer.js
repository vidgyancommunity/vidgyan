



const VideoContainer = ({ CourseTitle, dedicatedVideoComponent }) => {
  return (
    <>
      <div className="container" >
        <h1> Welcome to the {CourseTitle}</h1>

        {dedicatedVideoComponent}
      </div>
    
      
    </>
  );
};

export default VideoContainer;
