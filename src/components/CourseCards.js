import React from 'react';

function CourseCard(){
  return (
    <div className="col-sm-3">
      <div className="card">
        <img className="card-img-top" src="https://picsum.photos/200/300" alt="decorative"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below
            as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          </div>
          <div className="card-footer">
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <a href="#" className="btn btn-primary">More...</a>
        </div>
      </div>
    </div> 
  );
}
function CourseList(){
  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item">course 1</li>
        <li class="list-group-item">course 2</li>
        <li class="list-group-item">course 3</li>
        <li class="list-group-item">course 4</li>
        <li class="list-group-item">course 5</li>
      </ul>
    </div>
  )
}
export default class CourseCards extends React.Component{
  render(){
    return(
      <div>
        <div className="row">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
        <CourseList/>
      </div>
    );
  }
}