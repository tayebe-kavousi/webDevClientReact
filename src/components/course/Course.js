import React from 'react';
import CourseCard from './CourseCard';
import CourseList from './CourseList';
import CourseService from '../../services/CourseService';

export default class Course extends React.Component{
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            newCourse: {
                title: "",
                owner: "",
                imgURL: ""
            },
            courses: []
        };
    }
    
    componentDidMount() {
        this.courseService.findAllCourses()
        .then(courses => {
            this.setState({courses: courses});
        });
    }

    handleInputChange= (event)=>{
        if(event.target.id === "newCourseTitle"){
            console.log(event.target.value);
            this.setState({newCourse: {
                ...this.state.newCourse,
                title: event.target.value,
                created: new Date(),
                modified: new Date()
            }});
        } else if(event.target.id === "newCourseOwner"){
            console.log(event.target.value);
            this.setState({newCourse: {
                ...this.state.newCourse,
                owner: event.target.value,
            }});
        } else if(event.target.id === "newCourseImgURL"){
            console.log(event.target.value);
            this.setState({newCourse: {
                ...this.state.newCourse,
                imgURL: event.target.value,
            }});
        }
    }
    
    createCourse = () => {
        console.log(this.state.newCourse);
        this.courseService.createCourse(this.state.newCourse)
        .then(() => this.courseService.findAllCourses())
        .then(courses => this.setState({courses: courses}));
    }

    deleteCourse = (courseId) =>{
        this.courseService.deleteCourse(courseId)
        .then(() => this.courseService.findAllCourses())
        .then(courses => this.setState({courses: courses}));
    }

    render(){
        return(
            <div className="course container-fluid">
                <div>
                <h2>New Course</h2>
                    <input 
                        type="text" 
                        id="newCourseTitle" 
                        name="newCourseTitle" 
                        placeholder="Title" 
                        className="form-control"
                        onChange={this.handleInputChange}
                    />
                      <input 
                        type="text" 
                        id="newCourseOwner" 
                        name="newCourseOwner" 
                        placeholder="Owner" 
                        className="form-control"
                        onChange={this.handleInputChange}
                    />
                      <input 
                        type="text" 
                        id="newCourseImgURL" 
                        name="newCourseImgURL" 
                        placeholder="Image URL" 
                        className="form-control"
                        onChange={this.handleInputChange}
                    />
                    <div className="d-grid gap-2 margined-top-bottom">
                        <button
                            className="btn btn-primary" 
                            type="button"
                            onClick={this.createCourse}>
                            Add New Course
                        </button>
                    </div>
                </div>
                <h1>Course List</h1>
                <CourseList courses={this.state.courses} deleteCourse={this.deleteCourse}/>
                <CourseCard courses={this.state.courses} deleteCourse={this.deleteCourse}/>
            </div>
        );
    }
}
