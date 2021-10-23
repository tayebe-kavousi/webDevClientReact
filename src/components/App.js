import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import CourseCard from './CourseCard';
import ModuleList from "./ModuleList";



export default class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
      <ModuleList/>
        <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
      </div>
    );
  }
}

