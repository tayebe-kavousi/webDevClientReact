import React from 'react';
import {Link} from "react-router-dom";


function CourseRow({course, deleteCourse}){
    return(
        <tr>
            <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
            <td>created at: {course.created}</td>
            <td>last updated at: {course.modified}</td>
            <td><button className="btn btn-primary" onClick={()=>deleteCourse(course.id)}>delete</button></td>
        </tr>   
    );
  }
export default function CourseList({courses, deleteCourse}){
    return (
        <div className="container-fluid">
            <table className="table">
            <thead>
                <tr>
                <th>Title</th>
                <th>created</th>
                <th>modified</th>
                </tr>
            </thead>
            <tbody>
                {courses.map( (course,i) => <CourseRow key={i} course={course} deleteCourse={deleteCourse}/>)}
            </tbody>
            </table>
        </div>
    );
}
