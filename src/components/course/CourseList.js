import React from 'react';
import {Link} from "react-router-dom";


function CourseRow({course, deleteCourse}){
    return(
        <tr>
            <td>{course.title}</td>
            <td>{course.owner}</td>
            <td>
                {new Intl.DateTimeFormat('en-US',{year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(course.created)))}
            </td>
            <td>
                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(course.modified)))}
            </td>
            <td>{course.description}</td>
            <td><Link to={`/course/${course.id}`}><button className="btn btn-primary" onClick={()=>deleteCourse(course.id)}>Details</button></Link></td>
            <td><button className="btn btn-danger" onClick={()=>deleteCourse(course.id)}>delete</button></td>
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
                <th>Owner</th>
                <th>created</th>
                <th>modified</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {courses.map( (course,i) => <CourseRow key={i} course={course} deleteCourse={deleteCourse}/>)}
            </tbody>
            </table>
        </div>
    );
}
