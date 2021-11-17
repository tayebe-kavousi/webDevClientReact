import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Redirect, Switch, Link} from 'react-router-dom'
import Course from "./course/courses/CourseComponent";
import ModuleList from "./course/modules/ModuleListComponent";
import LessonTabs from './course/lessons/LessonTabsComponent';
import TopicPills from './course/topics/TopicPillsComponent';
import CourseEditor from './course/courses/CourseEditorComponent';
import Login from './user/Login';
import Register from './user/Register';
import Navbar from './navbar/Navbar.js';
import Home from './home/Home';
import Footer from './footer/Footer';
import Admin from './user/Admin';
import Profile from './user/Profile';
import WidgetListContainer from './course/widgets/WidgetListContainer'

export default class Main extends Component {
  render(){
    return (
      <Router>
        <div className="container-fluid">
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <Link to="/Widgets">Widget List</Link>
            <br/>
            <br/>
            <br/>
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
              <Route path="/Profile/:id" component={Profile}/>
              <Route path="/Widgets" component={WidgetListContainer}/>
              <Redirect to='/Home'/>
            </Switch>
            <Footer />
        </div>
      </Router>
    );
  }
}
