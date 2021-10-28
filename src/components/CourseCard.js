import React from 'react';

function RenderCard({course}){
  return(
<div className="col-sm-3">
      <div className="card">
        <img className="card-img-top" src="https://picsum.photos/200/300" alt="decorative"/>
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">
            This is a course.
          </p>
          </div>
          <div className="card-footer">
          <p className="card-text"><small className="text-muted">Last updated at 
          {course.modified}
          </small></p>
          <a href="#" className="btn btn-primary">created at 
          {course.created}
          </a>
        </div>
      </div>
    </div> 
  );
}

export default function CourseCard({courses}){  
  return (
    <div className="row">
      {courses.map( (course,i) => <RenderCard key={i} course={course}/>)}
    </div>
  );
}
