import React, { Component } from 'react';
import CourseService from '../../services/CourseService'; 
import './Home.css';

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
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="https://picsum.photos/id/1003/200/300" alt="decorative"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://picsum.photos/id/1028/300/200" alt="decorative"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://picsum.photos/id/106/300/200" alt="decorative"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
         </div>
    ) 
    }
}
