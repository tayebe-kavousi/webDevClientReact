import React from "react";
import TopicPills from "../topics/TopicPillsComponent";

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
            module.lessons.length > 0 ?
                <>
                    <div className="p-2">
                        <h5>{module.lessons.length} Lessons for {module.title}</h5>
                        <ul className="list-group">
                            {module.lessons.map((lesson, i) => 
                                <li className="list-group-item" key={i} onClick={()=>this.selectLesson(i)}>{lesson.title}</li>
                            )}
                        </ul>
                    </div>
                    <TopicPills lesson={module.lessons[this.state.selectedLessonIndex]} /> 
                </> 
            :
                <div className="p-2">
                    <h6> No Lessons Found !</h6>
                </div>
        );
    }
}