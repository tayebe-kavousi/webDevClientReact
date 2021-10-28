import React from 'react';
import {BrowserRouter as Router, Link, Route,Redirect, Switch} from 'react-router-dom'
import Course from "./Course";
import ModuleList from "./ModuleList";
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="container-fluid">
          <h1>White Board</h1>
          <nav className="nav navbar">
            <li>
              <Link to="/TopicPills.js">Topics</Link>
            </li>
            <li>
              <Link to="/LessonTabs.js">Lessons</Link>
            </li>
            <li>
              <Link to="/ModuleList.js">Modules</Link>
            </li>
            <li>
              <Link to="/Course.js">Courses</Link>
            </li>
          </nav>
          <Switch>
            <Route path="/TopicPills.js"><TopicPills/></Route>                          
            <Route path="/LessonTabs.js"><LessonTabs/></Route>            
            <Route path="/ModuleList.js" ><ModuleList/></Route>             
            <Route path="/Course.js"><Course/></Route>
            <Redirect to='/App'/>
          </Switch>
        </div>
      </Router>
    );
  }
}
