import React, { Component } from "react";
import CourseService from "../../services/CourseService";

export default class CourseEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            course:{}
        }
        this.courseService = CourseService.instance;
    }
    componentDidMount(){
        this.courseService.findCourseById(this.props.match.params.courseId)
        .then(course=>{this.setState({course:course})})
    }
    render(){
        return (
            <div className="container-fluid">
                <h2>Course Editor {this.props.match.params.courseId}</h2>
                <h3>Course Title: {this.state.course.title}</h3>
            </div>
        );
    }
}