import React from 'react';
import CourseList from './CourseListComponent';
import CourseService from  "../../../services/CourseService";

// export default function Course({courses}){
//     return (
//         <div>
//             {courses.length}
//         </div>
//     )
export default class Course extends React.Component{
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            newCourse: {
                title: "",
                owner: "",
                imgURL: "",
                description: ""
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
        switch(event.target.id){
            case "newCourseTitle" :
                this.setState({newCourse: {
                    ...this.state.newCourse,
                    title: event.target.value,
                    created: new Date(),
                    modified: new Date()
                }});
                break;
            case "newCourseOwner" :
                this.setState({newCourse: {
                    ...this.state.newCourse,
                    owner: event.target.value,
                }});
                break;
            case "newCourseImgURL" :
                this.setState({newCourse: {
                    ...this.state.newCourse,
                    imgURL: event.target.value,
                }});
                break;
            case "newCourseDescription" :
                this.setState({newCourse: {
                    ...this.state.newCourse,
                    description: event.target.value,
                }});
                break;
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
                    <input 
                        type="text" 
                        id="newCourseDescription" 
                        name="newCourseDescription" 
                        placeholder="Description" 
                        className="form-control"
                        onChange={this.handleInputChange}
                    />
                    <div className="d-grid gap-2 margined-top-bottom">
                        <button
                            className="btn btn-primary" 
                            type="button"
                            onClick={this.createCourse}
                            >
                            Add New Course
                        </button>
                    </div>
                </div>
                <h1>Course List</h1>
                <CourseList courses={this.state.courses} deleteCourse={this.deleteCourse}/>
            </div>
        );
    }
}
