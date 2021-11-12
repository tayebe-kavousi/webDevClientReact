import React from 'react';
import LessonTabs from "../lessons/LessonTabs";

function  ModuleListItem ({module, selectModule, index}){
    return(               
        <li className="list-group-item" onClick={ () => selectModule(index) }> {module.title} </li>
    );
}

export default class ModuleList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedModuleIndex: 0
        }
    }
    selectModule = (index)=>{
        this.setState({
            selectedModuleIndex: index
        })
    }
    render(){
        const course = this.props.course;
        const modules = course.modules;
        return (
            <div className="d-md-flex flex-row align-items-center">
                {modules.length > 0 ? <>
                    <div className="p-2">
                        <h5>{modules.length} modules for {course.title}</h5>
                        <ul className="list-group">
                            {modules.map((module, i) => <ModuleListItem key={i} module={module} selectModule={this.selectModule} index={i}/>) }
                        </ul>
                    </div>
                    <LessonTabs module={modules[this.state.selectedModuleIndex]}/>
                </>:
                    <div className="p-2">
                        <h6> No Modules Found ! </h6>
                    </div>
                }
            </div>
        );
    }
}