import React, { Component } from "react";
import CourseService from "../../../services/CourseService";
import ModuleList from "../modules/ModuleListComponent";


export default class CourseEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            course:{
                title:"",
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
            <div className="d-flex flex-row align-items-center">
                <div className="p-2">
                    <h2>Course {this.state.course.title}</h2>
                </div>  
                <div className="p-2"> 
                    <ModuleList course={this.state.course}/>
                </div>
            </div>
            </div>
        );
    }
}