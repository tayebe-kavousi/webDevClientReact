import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


export default class CourseCard extends React.Component{
  render(){
    return (
        <div className="col-sm-2">
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
}