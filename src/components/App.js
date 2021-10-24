import React from 'react';
import CourseCard from './CourseCard';
import ModuleList from "./ModuleList";
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';

export default class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
      <h1>White Board</h1>
      <TopicPills/>
      <LessonTabs/>
      <ModuleList/>
        <div className="row">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
      </div>
    );
  }
}

