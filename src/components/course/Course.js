import React from 'react';
import CourseCard from './CourseCard';
import CourseList from './CourseList';
import CourseService from '../../services/CourseService';

export default class Course extends React.Component{
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            newCourse: {},
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
        console.log( "new course: ", event.target.value);
        this.setState({newCourse: {
            title: event.target.value,
            created: new Date(),
            modified: new Date()
        }});
    }
    
    createCourse = () => {
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
            <div className="course">
                <div>
                    <input 
                        type="text" 
                        id="newCourse" 
                        name="newCourse" 
                        placeholder="new course" 
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
                <CourseList courses={this.state.courses} deleteCourse={this.deleteCourse}/>
                <CourseCard courses={this.state.courses} deleteCourse={this.deleteCourse}/>
            </div>
        );
    }
}
