import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Redirect, Switch} from 'react-router-dom'
import Course from "./course/Course";
import ModuleList from "./course/ModuleList";
import LessonTabs from './course/LessonTabs';
import TopicPills from './course/TopicPills';
import CourseEditor from './course/CourseEditor';
import Login from './user/Login';
import Register from './user/Register';
import Navbar from './navbar/Navbar.js';
import Home from './home/Home';
import Footer from './footer/Footer';
import Admin from './user/Admin';

export default class Main extends Component {
  render(){
    return (
      <Router>
        <div className="container-fluid">
            <Navbar/>
            <Switch>
              <Route path="/Home" component={Home}/>                        
              <Route path="/TopicPills" component={TopicPills}/>                        
              <Route path="/LessonTabs" component={LessonTabs}/>           
              <Route path="/ModuleList" component={ModuleList}/>           
              <Route path="/Course" exact component={Course}/>
              <Route path="/course/:courseId" component={CourseEditor}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Register" component={Register}/>
              <Route path="/Admin" component={Admin}/>
              <Redirect to='/Home'/>
            </Switch>
            <Footer />
        </div>
      </Router>
    );
  }
}
