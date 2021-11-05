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
        }).then(()=>console.log(this.state.courses));
    }

    render(){

        const imgIndicators =
            <ol className="carousel-indicators">
            { this.state.courses.map((course, index) =>{
            return(
                <li data-target="#courseCarousel" data-slide-to={`${index}`} className={index=== 0?"active":""} key={index}></li>
                )})
            }
            </ol>
        const images = 
            <div className="carousel-inner">
            {this.state.courses.map((course, index) =>{
            return(
                    <div className={index=== 0?"carousel-item active":"carousel-item"} key={index}>
                        <img className="d-block w-100" src="https://picsum.photos/id/1002/600/300" alt={index}/>
                        <div className="carousel-caption d-none d-md-block container">
                            <h1>{course.title}</h1>
                            <h3>Created at : {course.created}</h3>
                        </div>
                    </div>
            )})
            }
            </div>
        
        return (
            <div className="container centered-card">
                <h1>White Board</h1>
                <h2>Learn Without Limits</h2>
                <h3>Build skills with courses, certificates, and degrees online from world-class universities and companies.</h3>
                
                <div id="courseCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000" data-pause="hover">
                    {imgIndicators}
                    {images}
                    <a className="carousel-control-prev" href="#courseCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#courseCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        ) 
    }
}
