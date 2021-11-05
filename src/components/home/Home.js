import React, { Component } from 'react';
import CourseService from '../../services/CourseService'; 
import $ from 'jquery';
import './Home.css';

export default class Home extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses:[]}
    }
    componentDidMount() {
        $('.carousel').carousel()
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
                
                <div id="courseCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#courseCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#courseCarousel" data-slide-to="1"></li>
                        <li data-target="#courseCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://picsum.photos/id/1000/600/300" alt="First slide"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Course 1</h2>
                                <p>a new  course to teach you Bootstrap</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://picsum.photos/id/1001/600/300" alt="Second slide"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Course 2</h2>
                                <p>a new  course to teach you Javascript</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://picsum.photos/id/1002/600/300" alt="Third slide"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Course 1</h2>
                                <p>a new  course to teach you React</p>
                            </div>
                        </div>
                    </div>
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