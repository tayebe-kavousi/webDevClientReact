import React from "react";
import ModuleList from "../modules/ModuleList";
import TopicPills from "../topics/TopicPills";

export default class LessonTabs extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            selectedLessonIndex:0
        }
    }
    selectLesson = (index) =>{
        this.setState({
            selectedLessonIndex: index
        });
        console.log(this.state.selectedLessonIndex)
    }
    render(){
        const module = this.props.module;
        const showLessons = module.lessons.length > 0 ?
            <div>
                <h5>{module.lessons.length} Lessons for {module.title}</h5>
                <ul className="nav nav-tabs">
                    {module.lessons.map((lesson, i) => {
                        return(
                            <li className="nav-item" key={i} onClick={()=>this.selectLesson(i)}>
                                <a className="nav-link" aria-current="page" href="#">{lesson.title}</a>
                            </li>
                        )})}
                </ul>
                <TopicPills lesson={module.lessons[this.state.selectedLessonIndex]} /> 
            </div> :
            <h6> No Lessons Found !</h6>
        return(
            <div> 
                {showLessons}
            </div>
        );
    }
}