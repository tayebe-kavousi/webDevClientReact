import React, { Component } from 'react';
import CourseService from '../../services/CourseService'; 

export default class Home extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses:[]}
    }
    componentDidMount() {
        this.courseService.findAllCourses()
        .then(courses => {
            this.setState({courses: courses});
        });
    }
    render(){
    return (
        <div className="container centered-card">
            <h1>White Board</h1>
            <h2>Learn Without Limits</h2>
            <h3>Build skills with courses, certificates, and degrees online from world-class universities and companies.</h3>
        </div>
    )
    }
}
