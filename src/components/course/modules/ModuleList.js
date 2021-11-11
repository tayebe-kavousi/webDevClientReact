import React from 'react';
import LessonTabs from "../lessons/LessonTabs";

function  ModuleListItem ({module, selectModule, index}){
    return(               
        <li className="list-group-item" onClick={ () => selectModule(index) }>
            {module.title}
            <span className="pull-right">
                <i className="fa fa-trash i-plain"></i>
                <i className="fa fa-pencil i-plain"></i>
            </span>
        </li>
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
        const showModules = modules.length > 0 ?
            <div>
                <h5>{modules.length} modules for {course.title}</h5>
                <ul className="list-group">
                    {modules.map((module, i) => <ModuleListItem key={i} module={module} selectModule={this.selectModule} index={i}/>) }
                </ul>
                 <LessonTabs module={modules[this.state.selectedModuleIndex]}/>
            </div> :
            <h6> No Modules Found ! </h6>
        return (
            <div>
                {showModules}
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="title"
                />
                <div className="d-grid gap-2 margined-top-bottom">
                    <button className="btn btn-primary" type="button"> Add module </button>
                </div>
            </div>
        );
    }
}