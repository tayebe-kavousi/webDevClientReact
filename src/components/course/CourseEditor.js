import React, { Component } from "react";
import CourseService from "../../services/CourseService";
import ModuleList from "./modules/ModuleList";

export default class CourseEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            course:{
                modules:[{
                    lessons:[{
                        topics:[]
                    }]}]
            }
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
                <h2>Course Title: {this.state.course.title}</h2>
                <h4>Modules:</h4>
                <ModuleList course={this.state.course}/>
            </div>
        );
    }
}