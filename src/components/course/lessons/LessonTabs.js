import React from "react";
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
        return(
            <div>
                <h3>Lessons for {module.title}</h3>
                <ul className="nav nav-tabs">
                    {module.lessons.map((lesson, i) => {
                        return(
                            <li className="nav-item" key={i} onClick={()=>this.selectLesson(i)}>
                                <a className="nav-link active" aria-current="page" href="#">{lesson.title}</a>
                            </li>
                        )
                    })}
                </ul>
                <TopicPills lesson={module.lessons[this.state.selectedLessonIndex]} />  
            </div>
        );
    }
}