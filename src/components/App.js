import React from 'react';
import {BrowserRouter as Router, Link, Route,Redirect, Switch} from 'react-router-dom'
import Course from "./course/Course";
import ModuleList from "./course/ModuleList";
import LessonTabs from './course/LessonTabs';
import TopicPills from './course/TopicPills';
import CourseEditor from './course/CourseEditor';
import { Login } from './user/Login';
import { Register } from './user/Register';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light nav-fill">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <a className="navbar-brand" href="#">White Board</a>
                <ul className="navbar-nav nav-pills ">
                    <li className="nav-item active">
                      <Link to="/TopicPills.js">Topics</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/LessonTabs.js">Lessons</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/ModuleList.js">Modules</Link>
                    </li> 
                    <li className="nav-item">
                      <Link to="/Course.js">Courses</Link>
                    </li> 
                    <li className="nav-item">
                      <Link to="/Login.js">Login</Link>
                    </li>                 
                    <li className="nav-item">
                      <Link to="/Register.js">Register</Link>
                    </li>                 
                </ul>
            </div>
            </nav>
            <Switch>
              <Route path="/TopicPills.js"><TopicPills/></Route>                          
              <Route path="/LessonTabs.js"><LessonTabs/></Route>            
              <Route path="/ModuleList.js" ><ModuleList/></Route>             
              <Route path="/Course.js"><Course/></Route>
              <Route path="/course/:courseId"><CourseEditor/></Route>
              <Route path="/Login.js"><Login/></Route>
              <Route path="/Register.js"><Register/></Route>
              <Redirect to='/App'/>
            </Switch>
        </div>
      </Router>
    );
  }
}
