import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import CourseCard from './CourseCard';



export default class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
      </div>
    );
  }
}

