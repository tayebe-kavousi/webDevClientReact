import React from 'react';

function RenderCard({course, deleteCourse}){
  return(
    <div className="col-sm-3">
      <div className="card">
        <img className="card-img-top" src={course.imgURL} alt="decorative"/>
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">
            This is a course.
          </p>
        </div>
        <div className="card-footer">
        <p className="card-text">
            <small className="text-muted">Owner:{course.owner}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">created at {course.created}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Last modified at {course.modified}</small>
          </p>
          <button className="btn btn-primary" onClick={()=>deleteCourse(course.id)}>delete</button>
        </div>
      </div>
    </div> 
  );
}

export default function CourseCard({courses, deleteCourse}){  
  return (
    <div className="row">
      {courses.map( (course,i) => <RenderCard key={i} course={course} deleteCourse={deleteCourse}/>)}
    </div>
  );
}

