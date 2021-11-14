import React from 'react';


export default function CourseCard({courses}){  
  return (
    <div className="row">
      {courses.map((course, index) => {return(
        <div className="col-sm-3" key={index} style={{width:"33%"}}>
          <div className="card">
            <img className="card-img-top" src={`${course.imgURL}/1500`} alt={course.title}/>
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">
                <small className="text-muted">{course.description}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Created By :{course.owner}</small>
              </p>
            </div>
          </div>
        </div> 
      )})}   
    </div> 
  );
}

