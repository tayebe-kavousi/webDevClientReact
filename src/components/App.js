import React from 'react';
import {BrowserRouter as Router, Link, Route,Redirect, Switch} from 'react-router-dom'
import Course from "./course/Course";
import ModuleList from "./course/ModuleList";
import LessonTabs from './course/LessonTabs';
import TopicPills from './course/TopicPills';
import CourseEditor from './course/CourseEditor';
import Login from './user/Login';
import Register from './user/Register';
import Navbar from './navbar/Navbar.js';
import "../css/App.css";
export default class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="container-fluid">
            <Navbar/>
            <Switch>
              <Route path="/TopicPills" component={TopicPills}/>                        
              <Route path="/LessonTabs" component={LessonTabs}/>           
              <Route path="/ModuleList" component={ModuleList}/>           
              <Route path="/Course"component={Course}/>
              <Route path="/course/:courseId" component={CourseEditor}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Register" component={Register}/>
              <Redirect to='/App'/>
            </Switch>
        </div>
      </Router>
    );
  }
}
