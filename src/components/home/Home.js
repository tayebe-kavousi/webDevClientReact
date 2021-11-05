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
                
                <div id="courseCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000" data-pause="hover">
                    <ol className="carousel-indicators">
                        <li data-target="#courseCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#courseCarousel" data-slide-to="1"></li>
                        <li data-target="#courseCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://picsum.photos/id/0/600/300?grayscale" alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block container" style={{color:'rgb(1, 62, 73)'}} >
                                <h1>Course 1</h1>
                                <h3>a new  course to teach you Bootstrap</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://picsum.photos/id/119/600/300?grayscale" alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block container" style={{color:'rgb(1, 62, 73)'}}>
                                <h1>Course 2</h1>
                                <p>a new  course to teach you Javascript</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://picsum.photos/id/180/600/300?grayscale" alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block container" style={{color:'rgb(1, 62, 73)'}}>
                                <h1>Course 3</h1>
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
