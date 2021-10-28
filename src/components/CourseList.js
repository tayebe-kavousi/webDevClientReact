import React, { Component } from 'react';

function CourseRow({course}){
    return(
      <tr>
        <td>{course.title}</td>
        <td>created at: {course.created}</td>
        <td>last updated at: {course.modified}</td>
    </tr>
    );
  }
export default function CourseList({courses}){
    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th>Title</th>
                <th>created</th>
                <th>modified</th>
                </tr>
            </thead>
            <tbody>
            {courses.map( (course,i) => <CourseRow key={i} course={course}/>)}
            </tbody>
            </table>
        </div>
    );
}